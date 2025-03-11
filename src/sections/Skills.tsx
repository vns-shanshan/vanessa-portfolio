import Border from "@/components/features/Skills/Border";
import SkillList from "@/components/features/Skills/SkillList";

type Technologies = {
  [key: string]: string[];
};

const technologies: Technologies = {
  Frontend: [
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "Next.js",
    "React Router",
    "Bootstrap",
    "Vite",
    "MUI",
    "Tailwind CSS",
  ],
  divider1: [],
  Backend: [
    "Python",
    "Express.js",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
  ],
  divider2: [],
  Tools: [
    "Git",
    "Vercel",
    "Netlify",
    "Heroku",
    "Postman",
    "Jira",
    "Trello",
    "Slack",
    "Chrome DevTools",
    "Figma",
  ],
};

export default function Skills() {
  const categories = Object.keys(technologies);

  return (
    <div id="skills" className="flex flex-col l:gap-8 gap-6">
      <div>
        <h1 className="font-playfair-display l:text-2xl m:text-xl s:text-l font-semibold text-secondary-light dark:text-secondary-dark">
          Skills
        </h1>
      </div>

      <div className="flex m:flex-row justify-between flex-col s:gap-4">
        {categories.map((category, i) => {
          if ((i + 1) % 2) {
            // if odd rows
            return (
              <SkillList
                key={i}
                title={category}
                items={technologies[category]}
              />
            );
          } else {
            return <Border key={i} />;
          }
        })}
      </div>
    </div>
  );
}
