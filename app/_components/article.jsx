export default function Article({ thumbnail, source, headline }) {
  return (
    <article className="flex bg-[#333333] rounded-t-md rounded-b-md flex-col h-[304px]">
      <div className="flex-1">
        <img
          src={thumbnail}
          className="rounded-t-md h-[157px] w-full object-cover"
          loading="lazy"
          alt="news"
        />
      </div>
      <div className="flex-1 px-4 pt-3">
        <p className="text-xs">{source}</p>
        <p className="mb-2 text-lg line-clamp-3">{headline}</p>
      </div>
    </article>
  );
}
