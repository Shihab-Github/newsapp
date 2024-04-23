"use client";

import { ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Article({ thumbnail, source, headline, starred }) {
  const [liked, setLiked] = useState(null);
  const [disLiked, setDisLiked] = useState(null);

  const onLikeChage = () => {
    if (!liked) {
      setLiked(true);
      if (disLiked !== null) {
        onDisLikeChage();
      }
    } else {
      setLiked(false);
    }
  };

  const onDisLikeChage = () => {
    if (!disLiked) {
      setDisLiked(true);
      if (liked !== null) {
        onLikeChage();
      }
    } else {
      setDisLiked(false);
    }
  };

  return (
    <article
      className={cn(
        "flex bg-[#333333] rounded-t-md news-grid-item rounded-b-md flex-col h-[304px]",
        starred ? "col-span-2" : ""
      )}
    >
      <div className="flex-1">
        <img
          src={thumbnail}
          className="rounded-t-md h-[157px] w-full object-cover"
          loading="lazy"
          alt="news"
          onError={(e) =>
            (e.target.src =
              "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png")
          }
        />
      </div>
      <div className="flex-1 px-4 pt-3 pb-2">
        <div className="flex h-full flex-col">
          <p className="text-xs">{source}</p>
          <p className="mb-2 grow text-lg line-clamp-3">{headline}</p>
          <div className="flex gap-4 items-center">
            <div onClick={onLikeChage} className=" cursor-pointer">
              <ThumbsUp
                fill={liked ? "#FFF" : "rgba(0,0,0,0)"}
                size={18}
                strokeWidth={1.25}
              />
            </div>
            <div onClick={onDisLikeChage} className=" cursor-pointer">
              <ThumbsDown
                fill={disLiked ? "#FFF" : "rgba(0,0,0,0)"}
                size={18}
                strokeWidth={1.25}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
