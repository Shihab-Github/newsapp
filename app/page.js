"use client";

import { getAggregatedArticles } from "@/data-layer/news";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import "../global.style.css";

export default function Home() {
  const { isLoading, data: newses } = useQuery({
    queryKey: ["news"],
    queryFn: () => {
      return getAggregatedArticles().then((data) => {
        return data;
      });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-root h-screen flex justify-center items-center">
      <div className="grid rounded-xl max-[600px]:w-full p-4 shadow-2xl w-8/12 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2.5 bg-grid text-white">
        {newses.slice(0, 16).map((item, index) => (
          <article
            key={index}
            className="flex bg-[#333333] rounded-t-md rounded-b-md flex-col h-[304px]"
          >
            <div className="flex-1">
              <img
                src={item.thumbnail}
                className="rounded-t-md h-[157px] w-full object-cover"
                loading="lazy"
                alt="news"
              />
            </div>
            <div className="flex-1 px-4 pt-3">
              <p className="text-xs">{item.source}</p>
              <p className="mb-2 text-lg line-clamp-3">{item.headline}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
