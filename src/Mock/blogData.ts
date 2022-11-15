type Props = {
  id: number;
  title: string;
  text: string;
  author: string;
  img?: string;
};

export const blogData: Props[] = [
  {
    id: 1,
    title: "1つ目のブログ",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit?",
    author: "むら",
    img: "/image.jpeg",
  },
  {
    id: 2,
    title: "2つ目のブログ",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit?",
    author: "佐藤",
  },
  {
    id: 3,
    title: "3つ目のブログ",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit?",
    author: "むら",
  },
  {
    id: 4,
    title: "4つ目のブログ",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit?",
    author: "木村",
  },
];
