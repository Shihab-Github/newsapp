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

  console.log("newses: ", newses);

  return (
    <main>
      <div className="text-2xl">Hello World</div>
    </main>
  );
}
