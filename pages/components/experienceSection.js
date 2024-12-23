import React from "react";

const experiences = [
  {
    company: "Hexbird",
    role: "Fullstack Developer",
    startDate: "June 2021",
    endDate: "Diciembre 2022",
    description: [
      "Development of multiple projects including dashboards, mobile apps and even games.",
      "Involvement in project planing.",
    ],
    tecnologies: "Angular, React, NextJs, Ionic, NodeJs, Bootstrap",
  },
  {
    company: "Goula",
    role: "Front-End Developer",
    startDate: "June 2021",
    endDate: "Diciembre 2023",
    description: [
      "Refactoring of legacy code for better performance.",
      "Development of new components and integration on existing site.",
      "Maintenance of multiple projects features and stability.",
    ],
    tecnologies: "React, NextJs, Bootstrap",
  },
  {
    company: "Zumma",
    role: "Front-End Developer",
    startDate: "June 2022",
    endDate: "August 2022",
    description: ["Creation of first Zumma MVP - mobile first"],
    tecnologies: "React, NextJs, TailwindCSS",
  },
  {
    company: "Animal Político",
    role: "Front-End Developer",
    startDate: "August 2022",
    endDate: "February 2023",
    description: [
      "Refactoring of legacy code for better performance.",
      "Development of new components and integration on new site.",
      "Creation of Animal politico's whole new site on time record (6 months).",
      "Integration of instagram components using Meta api.",
    ],
    tecnologies: "React, NextJs, Bootstrap",
  },
  {
    company: "Termomagnéticos y control de radiaciones",
    role: "Front-End Developer | UX/UI",
    startDate: "June 2023",
    endDate: "September 2024",
    description: [
      "Development of dashboards for private projects.",
      "Creation of user interfaces.",
      "Lead front end side of development for each project.",
    ],
    tecnologies: "React, NextJs, TailwindCSS, Photoshop CS6, Figma",
  },
  {
    company: "Trasy",
    role: "Fullstack Developer",
    startDate: "January 2024",
    endDate: "June 2024",
    description: [
      "Development of new front-end components.",
      "Development of APIs using NodeJs.",
    ],
    tecnologies: "Angular, NodeJS, PrimeNG",
  },
  {
    company: "BiiU",
    role: "Fullstack Developer",
    startDate: "June 2024",
    endDate: "",
    description: [
      "Development of new front-end components.",
      "Development of APIs using GraphQL.",
      "Realization of code testing using Jest.",
    ],
    tecnologies: "React, NextJs, TailwindCSS, Jest, GraphQL, NodeJS",
  },
];

const ExperienceSection = () => {
  return (
    <div className="px-6 py-12 bg-gray-100 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
        Work experience
      </h2>
      <div className="space-y-8">
        {experiences.map((job, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-sky-900">
              {job.company}
            </h3>
            <p className="text-lg text-gray-600">{job.role}</p>
            <p className="text-sm text-gray-500">
              {job.startDate} - {job.endDate}
            </p>
            <ul className="mt-4 list-disc list-inside">
              {job.description.map((point, idx) => (
                <li key={idx} className="text-gray-700">
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-3"><span className="font-bold text-back">Technologies: </span>{job.tecnologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
