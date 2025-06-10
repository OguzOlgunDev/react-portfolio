function VideoCard({ title, text, video_url }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-md p-6">
      <div className="md:flex-1 w-full">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
      <div className="w-full md:flex-1 aspect-video relative rounded-lg overflow-hidden">
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
