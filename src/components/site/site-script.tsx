"use client";

/**
 * The one piece of authored JavaScript, for what CSS cannot do on its own:
 * applying and remembering the theme, copying the email address, and closing
 * the mobile menu once a link in it is chosen.
 *
 * The script runs from the server-rendered HTML. When React re-creates the root
 * layout in the browser, such as on a language change, it renders as inert text
 * because the listener below is already installed.
 */
const script = `(() => {
  const root = document.documentElement;
  let theme;
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") theme = saved;
  } catch {}

  // Changing language re-renders <html>, which would otherwise drop the choice.
  const keepTheme = () => {
    if (theme && root.dataset.theme !== theme) root.dataset.theme = theme;
  };
  keepTheme();
  new MutationObserver(keepTheme).observe(root, { attributes: true });

  const copyText = async (button) => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.dataset.copied = "";
      setTimeout(() => delete button.dataset.copied, 2000);
    } catch {
      // Without clipboard access, select the address so it can be copied by hand.
      const source = button.closest("[popover]")?.querySelector("[data-copy-source]");
      if (source) getSelection().selectAllChildren(source);
    }
  };

  addEventListener("click", (event) => {
    // Choosing an item in the mobile menu or a panel closes it.
    const menuItem = event.target.closest?.("[popover] a, .site-nav button");
    if (menuItem) menuItem.closest("[popover]:popover-open")?.hidePopover();

    const copyButton = event.target.closest?.("[data-copy]");
    if (copyButton) {
      copyText(copyButton);
      return;
    }

    const button = event.target.closest?.("[data-theme-toggle]");
    if (!button) return;

    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = isDark ? "light" : "dark";
    const apply = () => {
      theme = next;
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch {}
    };

    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }

    const box = button.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    root.dataset.themeChanging = "";
    const transition = document.startViewTransition(apply);
    transition.ready.then(() => {
      root.animate(
        { clipPath: ["circle(0 at " + x + "px " + y + "px)", "circle(" + radius + "px at " + x + "px " + y + "px)"] },
        { duration: 560, easing: "cubic-bezier(.16,1,.3,1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
    transition.finished.finally(() => delete root.dataset.themeChanging);
  });
})();`;

export function SiteScript() {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
