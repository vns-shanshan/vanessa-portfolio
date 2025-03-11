import { Experience } from "@/sections/Experience";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceList({ experiences }: ExperienceProps) {
  return (
    <div>
      <ul className="flex flex-col m:gap-6 s:gap-4">
        {experiences.map((exp, i) => (
          <li key={i}>
            <div className="flex flex-row justify-between max-m:flex-col">
              <div className="flex flex-col m:mb-1">
                <p className="font-dm-sans font-medium l:text-l text-m text-text-important-light dark:text-text-important-dark ">
                  {exp.title}
                </p>
                <p className="font-dm-sans font-medium l:text-l text-m text-text-light dark:text-text-dark ">
                  {exp.position}
                </p>
              </div>
              <p className="font-dm-sans font-normal l:text-l text-m text-text-light dark:text-text-dark ">
                {exp.year}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
