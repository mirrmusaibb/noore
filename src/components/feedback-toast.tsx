"use client";

import { useStorefront } from "@/components/storefront-provider";

export function FeedbackToast() {
  const { notice } = useStorefront();
  return notice ? <div className="toast" role="status" aria-live="polite">{notice}</div> : null;
}
