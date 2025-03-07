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
  Backend: [
    "Python",
    "Express.js",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
  ],
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
        <h1 className="font-playfair-display l:text-2xl m:text-xl s:text-l font-semibold text-secondary-light">
          Skills
        </h1>
      </div>

      <div className="flex m:flex-row justify-between flex-col s:gap-4">
        {categories.map((category, index) => (
          <>
            <SkillList title={category} items={technologies[category]} />

            {index < categories.length - 1 && <Border />}
          </>
        ))}
      </div>
    </div>
  );
}
