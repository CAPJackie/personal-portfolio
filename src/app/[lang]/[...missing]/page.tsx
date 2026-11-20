import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ missing: ["not-found"] }];
}

/** Sends unknown addresses to the translated not-found page. */
export default function MissingPage() {
  notFound();
}
