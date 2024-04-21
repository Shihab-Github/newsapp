"use client";

import { getAggregatedArticles } from "@/data-layer/news";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isLoading, data: newses } = useQuery({
    queryKey: ["news"],
    queryFn: () => {
      return getAggregatedArticles().then((data) => {
        return data;
      });
    },
  });

  return (
    <main>
      <div className="text-2xl">{isLoading ? "loading" : "News page"}</div>
    </main>
  );
}
