import { FaGithub, FaGlobe } from "react-icons/fa";

function VideoCard({ title, text, video_url, githubUrl, websiteUrl }) {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-md p-6">
      {/* GitHub Icon */}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-9 left-9 text-gray-600 hover:text-black transition"
        >
          <FaGithub size={32} />
        </a>
      )}

      {/* Website Icon - Sağında görünsün */}
      {websiteUrl && (
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute bottom-9 ${
            githubUrl ? "left-20" : "left-9"
          } text-gray-600 hover:text-blue-600 transition`}
        >
          <FaGlobe size={32} />
        </a>
      )}

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
