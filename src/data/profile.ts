export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
  links: LinkItem[];
};

// TODO: 아래는 보여주기용 더미 값입니다. 실제 이름, 소개, 사진, 링크로 교체하세요.
// id는 클릭 수 집계의 키로 쓰이므로 바꾸지 않는 것이 좋습니다.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  image: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/your-username" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/your-username" },
    { id: "blog", title: "Blog", url: "https://example.com" },
  ],
};
