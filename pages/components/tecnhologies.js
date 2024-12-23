import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaAngular, FaBootstrap } from "react-icons/fa";
import { SiAmazonwebservices, SiGraphql, SiI18Next, SiIonic, SiJest, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";

const FeaturedTechnologies = () => {
  const technologies = [
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: "Angular", icon: <FaAngular className="text-red-600 text-4xl" /> }, 
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3 className="text-blue-400 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-4xl" /> }, 
    { name: "GraphQL", icon: <SiGraphql className="text-blue-300 text-4xl" /> }, 
    { name: "AWS", icon: <SiAmazonwebservices className="text-yellow-500 text-4xl" /> }, 
    { name: "ionic", icon: <SiIonic className="text-blue-300 text-4xl" /> }, 
    { name: "i18Next", icon: <SiI18Next className="text-black text-4xl" /> }, 
    { name: "Jest", icon: <SiJest className="text-yellow-900 text-4xl" /> }, 
    { name: "PostgressQL", icon: <SiPostgresql className="text-blue-300 text-4xl" /> }, 
  ];

  return (
    <div className="py-12 bg-gray-100 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Featured Technologies
      </h2>
      <div className="flex grid grid-cols-2 md:grid-cols-4 flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 transform hover:scale-110 transition-transform"
          >
            {tech.icon}
            <span className="text-gray-700 font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTechnologies;
