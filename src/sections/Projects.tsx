import Card from "@/components/features/Projects/Card";
import cineverse from "@/assets/cineverse.png";
import cashpro from "@/assets/cashpro.png";
import pinstagram from "@/assets/pinstagram.png";
import escapegoat from "@/assets/escape-goat.png";

export interface CardInfosProps {
  photo: string;
  title: string;
  appLink?: string;
  tags: string[];
  description: string;
  codeLink: string;
}

const cardInfos: CardInfosProps[] = [
  {
    photo: cineverse,
    title: "CineVerse",
    appLink: "https://cineverse-movie-rating.netlify.app/movies",
    tags: ["Vite", "Express", "MongoDB", "JWT", "S3 Bucket", "Tailwind CSS"],
    description:
      "Cineverse is a movie comment app that allows users to browse movies, leave comments, and engage with other movie enthusiasts. The app is designed with a RESTful API and supports user authentication and interaction features.",
    codeLink: "https://github.com/vns-shanshan/react-cineverse-front-end",
  },
  {
    photo: cashpro,
    title: "CashPro",
    appLink: "https://cashpro-app-a7eaca21401a.herokuapp.com/",
    tags: ["Python", "Django", "PostgreSQL", "Heroku"],
    description:
      "CashPro is an app that allows users to send and receive money, providing a seamless and secure platform for managing transactions efficiently.",
    codeLink: "https://github.com/vns-shanshan/django-crud-app-cashpro",
  },
  {
    photo: pinstagram,
    title: "Pinstagram",
    tags: ["Vite", "Express", "MongoDB", "JWT", "React.js", "Multer"],
    description:
      "Developed a full-stack image-sharing app with a separate frontend and backend architecture, using Express and MongoDB for the backend, React with the Vite build tool for the frontend, and environment variables to link backend endpoints.",
    codeLink: "https://github.com/vns-shanshan/react-project-front-end",
  },
  {
    photo: escapegoat,
    title: "Escape Goat",
    appLink: "https://escape-goat.vercel.app/search",
    tags: ["Next.js", "TypeScript", "MUI"],
    description:
      "This app lets users search for nearby escape rooms, designed with Figma to ensure consistency and comprehensive specifications throughout development.",
    codeLink: "https://github.com/vns-shanshan/escapr",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col l:gap-12 gap-8">
      <div>
        <h1 className="text-secondary-light dark:text-secondary-dark font-semibold font-playfair-display l:text-2xl m:text-xl s:text-l">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 m:grid-cols-2 l:gap-20 gap-12">
        {cardInfos.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </div>
  );
}
