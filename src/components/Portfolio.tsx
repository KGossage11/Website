import { useState } from "react";
import MTapp from "../assets/MTApp.png";
import PictureThis from "../assets/PTimg.png";
import RapidReach from "../assets/RRimg.png";
import SpotIt from "../assets/SpotIT.png";
import personalPic from "../assets/personalPic.png";

type Category =
  | "about"
  | "projects"
  | "skills"
  | "resume";

// interface Photo {
//   id: string;
//   src: string;
//   category: Category;
// }

interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  link?: string;
  image: string;
}

// const PAGE_SIZE = 12;

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
  { id: "skills" as Category, label: "Skills" },
  { id: "resume" as Category, label: "Resume" },
];

// function FadeInImage({ src, alt }: { src: string; alt: string }) {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <img
//       src={src}
//       alt={alt}
//       onLoad={() => setLoaded(true)}
//       loading="eager"
//       decoding="async"
//       fetchPriority="high"
//       className={`w-full h-full object-cover contain-content transition-opacity duration-500 ${
//         loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
//       }`}
//     />
//   );
// }

// function loadPhotos(): Photo[] {
//   const modules = import.meta.glob(
//     "/src/assets/photos/{wildlife,graduations,portraits,events}/*.{jpg,jpeg,png,webp}",
//     { eager: true }
//   );

//   return Object.entries(modules).map(([path, module]) => {
//     const parts = path.split("/");
//     const category = parts[parts.length - 2] as Category;

//     return {
//       id: path,
//       src: (module as { default: string }).default,
//       category,
//     };
//   });
// }

// const photos = loadPhotos();

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("about");
//   const [page, setPage] = useState(0);

//   useEffect(() => {
//     setPage(0);
//   }, [selectedCategory]);

//   const filteredPhotos = useMemo(() => {
//     return selectedCategory === "all"
//       ? photos
//       : photos.filter(photo => photo.category === selectedCategory);
//   }, [selectedCategory]);

//   const pagedPhotos = useMemo(() => {
//     const start = page * PAGE_SIZE;
//     return filteredPhotos.slice(start, start + PAGE_SIZE);
//   }, [filteredPhotos, page]);

//   useEffect(() => {
//     pagedPhotos.forEach(photo => {
//       const img = new Image();
//       img.src = photo.src;
//     });
//   }, [pagedPhotos]);

//   const totalPages = Math.ceil(filteredPhotos.length / PAGE_SIZE);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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


      </div>
    </section>
  );
}
