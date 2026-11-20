import type { ComponentProps } from "react";
import type { Layer } from "@/data/projects";
import { cn } from "@/lib/utils";

/** shadcn/ui badge, coloured by the layer of the stack it belongs to. */
export function Badge({ className, layer, ...props }: ComponentProps<"span"> & { layer?: Layer }) {
  return (
    <span
      data-layer={layer}
      className={cn(
        "layer-tint inline-flex min-h-7 items-center rounded-full border px-3 text-sm",
        className,
      )}
      {...props}
    />
  );
}
