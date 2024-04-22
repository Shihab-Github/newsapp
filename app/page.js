"use client";
import { useState } from "react";
import { getAggregatedArticles } from "@/data-layer/news";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import Article from "./_components/article";
import { cn } from "@/lib/utils";
import { Categories } from "@/data-layer/constants";
import "../global.style.css";

export default function Home() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const { isLoading, data: newses } = useQuery({
    queryKey: ["news", { categoryIdx: activeCategoryIndex, searchStr: "" }],
    queryFn: (params) => {
      return getAggregatedArticles(params).then((data) => {
        return data;
      });
    },
  });

  return (
    <main
      className={cn(
        "bg-root flex  items-center flex-col",
        isLoading ? "h-screen" : "h-full justify-center"
      )}
    >
      <div className="flex justify-center py-3">
        <div className="text-3xl text-white">Welcome to Bing news</div>
      </div>
      <div className="grid rounded-xl max-[600px]:w-full p-4 shadow-2xl w-8/12 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2.5 bg-grid text-white">
        <div className="2xl:col-span-5 xl:col-span-4 lg:col-span-3 md:col-span-2 sm:col-span-1 sm:flex-wrap row-span-1 py-2 flex gap-2">
          {Categories.map((item, index) => (
            <Button
              onClick={(e) => setActiveCategoryIndex(index)}
              className={`text-white rounded-full ${
                activeCategoryIndex === index ? "border-2 border-white" : ""
              }`}
              key={index}
            >
              {item}
            </Button>
          ))}
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {newses.slice(0, 40).map((item, index) => (
              <Article
                key={index}
                thumbnail={item.thumbnail}
                source={item.source}
                headline={item.headline}
                starred={item.starred}
              />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
