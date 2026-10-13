import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={144}
        height={144}
        priority
        className="h-36 w-36 rounded-full border-2 border-gray-900 object-cover dark:border-gray-100"
      />
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-lg text-gray-700 dark:text-gray-300">{bio}</p>
    </header>
  );
}
