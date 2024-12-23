const ProjectCard = ({ title, description, url, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-sky-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        {url !== "" && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            See proyect
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
