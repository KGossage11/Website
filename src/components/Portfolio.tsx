import { useState } from "react";
import MTapp from "../assets/MTApp.png";
import PictureThis from "../assets/PTimg.png";
import RapidReach from "../assets/RRimg.png";
import SpotIt from "../assets/SpotIT.png";
import personalPic from "../assets/personalPic.png";
import resumeImg from "../assets/resumeImg.png";
import resumePDF from "../assets/KG_Resume.pdf";

type Category =
  | "about"
  | "projects"
  | "resume";

interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  link?: string;
  image: string;
}


const projects: Project[] = [
  {
    id: "project-1",
    title: "Mariposa Trails Digital Guide App",
    role: "Team Lead / Fullstack Developer",
    description:
      "Mobile app providing interative digital guides for hiking trails in Mariposa County, CA. F3 Innovate Award Winner.",
    // link: "",
    image: MTapp,
  },
  {
    id: "project-2",
    title: "P!cture Th!s",
    role: "AI Engineer - Computer Vision & Gesture Recognition",
    description:
      "Interactive web application that combines speech recognition, speech-to-text, computer vision, and gesture-detection to create an intuitive and creative whiteboard experience.",
    link: "https://github.com/aravgupta-dev/CSE155Project",
    image: PictureThis,
  },
  {
    id: "project-3",
    title: "Rapid Reach",
    role: "Backend Developer",
    description:
      "Web application that optimizes response time of ambulances to emergency calls using real-time traffic data and predictive analytics.",
    link: "https://github.com/KGossage11/Hacktually",
    image: RapidReach,
  },
  {
    id: "project-4",
    title: "Spot It Computer Vision Model",
    role: "AI Engineer - Computer Vision",
    description:
      "Trained a computer vision model which finds the common symbol between two Spot It cards with 98% accuracy.",
    // link: "",
    image: SpotIt,
  },
];

const categories = [
  { id: "about" as Category, label: "About" },
  { id: "projects" as Category, label: "Projects" },
  { id: "resume" as Category, label: "Resume" },
];


export function Portfolio() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("about");
  return (
    <section id="portfolio" className="py-20 bg-black select-none">
      <div className=" select-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
        <div className="text-center text-black mb-12">
          <h2 className="text-4xl text-white md:text-5xl mb-4">Portfolio</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-white text-black"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {selectedCategory === "projects" && (
          <div className="select-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(projects => (
              <a
                key={projects.id}
                href={projects.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={projects.image}
                    alt={projects.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold mb-2">
                    {projects.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {projects.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        {selectedCategory === "about" && (
           <div className="max-w-5xl mx-auto mt-4px-4group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white">
            <div className="flex flex-col md:flex-row gap-8 items-start p-8">
              <img
                src={personalPic}
                alt="Kyle Gossage"
                className="w-80 h-80 object-contain rounded-lg"
              />

              <div className="text-left">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I am Kyle Gossage, a Software Engineer specializing in Computer Vision and Fullstack Development.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I am interested in developing creative and useful software that leverages AI to solve real-world problems.
                  I am interested in software engineering in the medical, agricultural, and other fields that directly and positively impacts people's lives.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I enjoy hiking, snowboarding, gaming, and exploring new technologies in my free time.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedCategory === "resume" && (
           <div className="select-none max-w-5xl mx-auto mt-4px-4group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-black">
            <div>
              <a
                href={resumePDF}
                download="Kyle_Gossage_Resume.pdf"
                className="inline-block self-start bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Download Resume
              </a>
            </div>
            <div className="flex justify-center mt-8">
              <img
                src={resumeImg}
                alt="Kyle Gossage"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}


      </div>
    </section>
  );
}
