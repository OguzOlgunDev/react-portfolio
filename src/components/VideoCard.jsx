import { FaGithub, FaGlobe } from "react-icons/fa";

function VideoCard({ title, text, video_url, githubUrl, websiteUrl }) {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-md p-6">
      {/* Sol Metin Alanı */}
      <div className="md:flex-1 w-full">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{text}</p>

        {/* İkonlar */}
        <div className="flex gap-4 mt-4 md:mt-8">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <FaGithub size={28} />
            </a>
          )}

          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaGlobe size={28} />
            </a>
          )}
        </div>
      </div>

      {/* Sağ Video Alanı */}
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
