"use client";

import type { LinkItem } from "@/data/profile";

function recordClick(id: string) {
  const body = JSON.stringify({ id });
  // 새 탭으로 이동하는 동안에도 요청이 유실되지 않도록 sendBeacon을 우선 사용합니다.
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/click", new Blob([body], { type: "application/json" }));
  } else {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  }
}

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => recordClick(link.id)}
      className="block w-full rounded-2xl border-2 border-gray-900 bg-white px-5 py-4 text-center font-semibold transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0] hover:shadow-gray-900 active:translate-y-0 active:shadow-none dark:border-gray-100 dark:bg-gray-800 dark:hover:shadow-gray-100"
    >
      {link.title}
    </a>
  );
}
