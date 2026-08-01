import { useState, type MouseEvent } from 'react';
import { ArrowUpRight, Download, FolderKanban } from 'lucide-react';
import MTapp from '../assets/MTApp.png';
import PictureThis from '../assets/PTimg.png';
import RapidReach from '../assets/RRimg.png';
import SpotIt from '../assets/SpotIT.png';
import personalPic from '../assets/personalPic.png';
import resumeImg from '../assets/resumeImg.png';
import resumePDF from '../assets/KG_Resume.pdf';

type Category = 'about' | 'work' | 'resume';

interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Mariposa Trails Digital Guide App',
    role: 'Team Lead / Full-stack Developer',
    description: 'A polished mobile experience for trail guidance in Mariposa County. The app provides offline trail maps, points of interest, and informational content.',
    tags: ['React', 'Mobile', 'Product Design'],
    image: MTapp,
  },
  {
    id: 'project-2',
    title: 'P!cture Th!s',
    role: 'AI Engineer / Interaction Designer',
    description: 'An experimental whiteboard experience combining speech, vision, and gesture recognition into a creative workflow.',
    tags: ['Computer Vision', 'AI', 'Web'],
    link: 'https://github.com/aravgupta-dev/CSE155Project',
    image: PictureThis,
  },
  {
    id: 'project-3',
    title: 'Rapid Reach',
    role: 'Backend Developer',
    description: 'A data driven emergency response platform using predictive analytics to improve ambulance dispatch efficiency.',
    tags: ['Backend', 'Analytics', 'Systems'],
    link: 'https://github.com/KGossage11/Hacktually',
    image: RapidReach,
  },
  {
    id: 'project-4',
    title: 'Spot It Computer Vision Model',
    role: 'AI Engineer',
    description: 'A custom vision model designed to detect the shared symbol between two Spot It cards with high accuracy.',
    tags: ['CV', 'Model Training', 'Python'],
    image: SpotIt,
  },
];

const categories = [
  { id: 'about' as Category, label: 'About' },
  { id: 'work' as Category, label: 'Projects' },
  { id: 'resume' as Category, label: 'Resume' },
];

const services = ['Full-stack web development', 'Frontend interfaces', 'Backend systems', 'Freelance websites for businesses'];
const strengths = [ 'TypeScript', 'Python', 'C++', 'React', 'Node', 'APIs', 'Databases','Design systems', 'Product thinking', 'AI-enabled experiences'];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('about');
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleCardMove = (event: MouseEvent<HTMLAnchorElement>, projectId: string) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;

    setActiveCard(projectId);
    setTilt({ x, y });
  };

  const resetCard = () => {
    setActiveCard(null);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="portfolio" className="border-b border-black bg-[#f4efe9] px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-600">Portfolio</p>
            {/* <h2 className="text-3xl font-black uppercase tracking-[0.04em] sm:text-4xl">
              Built to feel intentional, modern, and memorable.
            </h2> */}
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`border px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition-all ${
                  selectedCategory === category.id
                    ? 'border-black bg-black text-[#f4efe9] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]'
                    : 'border-black bg-transparent text-black hover:-translate-y-0.5'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {selectedCategory === 'work' && (
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => {
              const isActive = activeCard === project.id;

              return (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={(event) => handleCardMove(event, project.id)}
                  onMouseLeave={resetCard}
                  onClick={() => setActiveCard(project.id)}
                  className="group relative overflow-hidden border border-black bg-white p-4 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    transform: isActive ? `perspective(900px) rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)` : 'perspective(900px) rotateX(0deg) rotateY(0deg)',
                    boxShadow: isActive ? '0 16px 36px rgba(0, 0, 0, 0.16)' : '0 8px 20px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <div className="mb-4 overflow-hidden border border-black bg-[#f8f4eb]">
                    <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">{project.role}</p>
                      <h3 className="mt-1 text-xl font-black uppercase tracking-[0.02em]">{project.title}</h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-700">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border border-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={`mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 transition-opacity ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                    {isActive ? 'Selected • click to inspect' : 'Hover or click to engage'}
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {selectedCategory === 'about' && (
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border border-black bg-[#111111] p-8 text-[#f8f4eb] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.95)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">About</p>
              <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
                “Make it work, make it right, make it fast.” - Kent Beck
              </h3>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                I’m Kyle Gossage, a software engineer focused on full-stack development and building solutions that matter. My work blends practical engineering with a strong eye for product experience, so the results feel as good as they perform.
              </p>
              <p className="mt-4 text-lg leading-8 text-zinc-300">
                I enjoy working across the stack, building custom websites, and shaping software that is both useful and memorable.
              </p>
              <div className="mt-8 mx-auto w-full max-w-md overflow-hidden rounded-xl border border-white/20">
                <img src={personalPic} alt="Kyle Gossage" className="h-130 w-full object-cover object-bottom" />
              </div>
            </div>

            <div className="grid gap-5">
              <div className="border border-black bg-white p-7">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-600">
                  <FolderKanban className="h-4 w-4" />
                  Services
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-700">
                  {services.map((service) => (
                    <li key={service} className="border-b border-black/10 pb-3 last:border-b-0 last:pb-0">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-black bg-[#f8f4eb] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-600">Strengths</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {strengths.map((strength) => (
                    <span key={strength} className="border border-black px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em]">
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedCategory === 'resume' && (
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border border-black bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-600">Resume</p>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-[0.04em]">Available for full-time, freelance, and contract work.</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-700">
                I’m looking for work where I can grow as a developer, contribute to meaningful projects, and help build software that makes a difference.
              </p>
              <a
                href={resumePDF}
                download="Kyle_Gossage_Resume.pdf"
                className="mt-6 inline-flex items-center gap-2 border border-black bg-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4efe9]"
              >
                <Download className="h-4 w-4" />
                Download resume
              </a>
            </div>

            <div className="overflow-hidden border border-black bg-[#111111] p-3">
              <img src={resumeImg} alt="Kyle Gossage resume preview" className="h-full w-full object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
