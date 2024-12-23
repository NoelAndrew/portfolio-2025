import Navbar from "./components/navbar";
import ProjectCard from "./components/projectCard";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import SkillsCarrousell from "./components/skillsCarrousell";
import ExperienceSection from "./components/experienceSection";
import FeaturedTechnologies from "./components/tecnhologies";
import Footer from "./components/footer";
import { useState } from "react";

const projects = [
  {
    title: "Animal Político",
    description: "Front end developer",
    url: "https://animalpolitico.com/",
    image: "/animal.png",
  },
  {
    title: "Goula - México",
    description: "Front end developer",
    url: "",
    image: "/quesos_mex.jpg",
  },
  {
    title: "Goula - Andino",
    description: "Front end developer",
    url: "",
    image: "/quesos.jpg",
  },
  {
    title: "Goula - Awards",
    description: "Front end developer",
    url: "https://premios.goula.lat",
    image: "/goula_award.png",
  },
  {
    title: "Zumma - MVP",
    description: "Front end developer",
    url: "https://www.app.tuzumma.com",
    image: "/zumma_final.jpg",
  },
  {
    title: "HCrew APP",
    description: "Front end developer",
    url: "",
    image: "/hcrew.png",
  },
  {
    title: "OBS dashboard",
    description: "Front end developer",
    url: "",
    image: "/obs.png",
  },
  {
    title: "Casino me conoces",
    description: "Front end developer",
    url: "",
    image: "/casino.png",
  },
  {
    title: "Tracy",
    description: "Fullstack developer",
    url: "",
    image: "/tracy.jpg",
  },
  {
    title: "Rick & Morty app",
    description: "Front end developer - Personal Project",
    url: "https://rick-morty-project-jade.vercel.app",
    image: "/rick.png",
  },
];

const Home = () => {

  const [toastVisible, setToastVisible] = useState(false);

  const handleMailTo = () => {
    if (typeof window !== "undefined") {
      window.open(`mailto:andrew98noel@gmail.com?subject=Contacto&body=`);
    }
  };
  const handleLinkShare = () => {
    navigator.clipboard.writeText("+522441133663");
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <div className="flex flex-wrap items-center justify-center rounded-2xl border bg-white p-10 text-center shadow-lg">
          <div>
            <img
              className="mx-auto mb-4 h-32 w-32 rounded-full shadow-lg"
              src="/yo.jpeg"
              alt="profile picture"
            />
            <h1 className="text-xl font-semibold text-slate-800">
              Noel Andrew
            </h1>
            <h2 className="font-semibold text-slate-500">
              Front End developer
            </h2>

            <span className="flex justify-between w-full">
              <a
                href="https://www.linkedin.com/in/noel-andrew-ortiz-mitre-a666461a2/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaLinkedin className="text-black text-xl hover:opacity-50" />
              </a>
              <a onClick={() => handleMailTo()}>
                <IoIosMail className="text-black text-xl hover:opacity-50" />
              </a>
              <a
                href={"http://wa.me/2441133663"}
                target={"_blank"}
                rel="noreferrer"
              >
                <FaWhatsappSquare className="text-black text-xl hover:opacity-50" />
              </a>
              <a onClick={() => handleLinkShare()}>
                <FaPhoneSquareAlt className="text-black text-xl hover:opacity-50" />
              </a>
            </span>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-8 text-sm font-normal text-slate-800">
              I'm a software engineer born in Puebla, México. I have an IT
              Engineer bachelor degree and 3 and a half years of experience
              working in software development, mostly involved in the Front End
              side of development. My goal is to grow as much as I can as a
              developer and as a person.
            </p> 
          </div>
        </div>
        <div className="mt-5" id="experience">
          <ExperienceSection />
        </div>
        <h1 className="text-3xl font-bold text-center my-6">My Proyects</h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          id="projects"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
              image={project.image}
            />
          ))}
        </div>
        <div className="mt-6" id="ft">
          <FeaturedTechnologies />
        </div>
      </main>
      {toastVisible && (
        <div className="fixed top-1/4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-transform duration-300 transform translate-y-0">
          Phone number copied to clipboard!
        </div>
      )}
      <div id="contact">
        <Footer handleLinkShare={handleLinkShare} handleMailTo={handleMailTo} />
      </div>
    </>
  );
};

export default Home;
