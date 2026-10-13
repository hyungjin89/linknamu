"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Counts = Record<string, number>;

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 서버 값을 받기 전에는 모든 카드가 0회로 보입니다.
  const [counts, setCounts] = useState<Counts>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옵니다.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/click", { cache: "no-store" })
      .then((res) => (res.ok ? (res.json() as Promise<Counts>) : Promise.reject(res.status)))
      .then((data) => {
        if (!cancelled) setCounts((prev) => ({ ...prev, ...data }));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // 클릭 즉시 화면의 숫자를 1 올립니다. 실제 기록은 LinkCard가 서버로 보냅니다.
  function handleClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <ul className="mt-10 flex w-full flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} count={counts[link.id] ?? 0} onClick={handleClick} />
        </li>
      ))}
    </ul>
  );
}
