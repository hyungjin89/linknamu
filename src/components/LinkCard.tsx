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

type LinkCardProps = {
  link: LinkItem;
  count: number;
  onClick?: (id: string) => void;
};

export default function LinkCard({ link, count, onClick }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        recordClick(link.id);
        onClick?.(link.id);
      }}
      className="relative block w-full rounded-2xl border-2 border-gray-900 bg-white px-16 py-4 text-center font-semibold transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0] hover:shadow-gray-900 active:translate-y-0 active:shadow-none dark:border-gray-100 dark:bg-gray-800 dark:hover:shadow-gray-100"
    >
      {link.title}
      <span
        aria-label={`클릭 ${count}회`}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-gray-500 dark:text-gray-400"
      >
        {count}회
      </span>
    </a>
  );
}
