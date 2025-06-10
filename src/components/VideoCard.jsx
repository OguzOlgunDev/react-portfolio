function VideoCard({ title, text, video_url }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-md p-6 h-[100%]">
      <div className="flex-grow basis-1/3">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
      <div className="flex-grow basis-1/2 h-64 md:h-96 relative rounded-lg overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={video_url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoCard;
