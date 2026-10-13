import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center sm:items-center sm:p-8">
      <ThemeToggle />
      {/* 와이어프레임의 둥근 프레임: 모바일에서는 화면 전체, 큰 화면에서는 카드로 표시 */}
      <div className="flex w-full max-w-sm flex-col items-center px-8 py-16 sm:min-h-[640px] sm:rounded-[2.5rem] sm:border-2 sm:border-gray-900 sm:bg-white sm:py-14 sm:dark:border-gray-100 sm:dark:bg-gray-900">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        <LinkList links={profile.links} />
      </div>
    </main>
  );
}
