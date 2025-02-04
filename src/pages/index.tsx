import Head from "next/head";
import Header from "@/components/Header";
import styles from "../styles/style.module.css";
import Timeline from "@/components/Timeline";
import Post from "@/components/Post";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  name: string;
  date: string;
  content: string;
};

// DBから取得しているダミーデータ
const dummyData: Post[] = [
  {
    id: 1,
    name: "山田 太郎",
    date: "2024-02-01",
    content: "今日はReactの勉強をしました！",
  },
  {
    id: 2,
    name: "佐藤 花子",
    date: "2024-02-02",
    content: "新しいプロジェクトが始まりました。",
  },
  {
    id: 3,
    name: "鈴木 一郎",
    date: "2024-02-03",
    content: "Next.jsのSSRを試しています。",
  },
  {
    id: 4,
    name: "田中 桃子",
    date: "2024-02-04",
    content: "UIデザインの改善を行いました。",
  },
  {
    id: 5,
    name: "中村 健",
    date: "2024-02-05",
    content: "TypeScriptの型安全性について学習中。",
  },
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(dummyData);
  }, []);

  console.log(posts, "データ");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Header />
        <Timeline />

        {/* ボタン */}
        {/* <Button textColor='white' bg='pink' /> */}

        {/* ポスト */}
        {posts.map((item, index) => (
           <Post 
            key={index}
            id={item.id}
            name={item.name}
            date={item.date} 
            content={item.content}
          />
        ))}
      </main>
    </>
  );
}
