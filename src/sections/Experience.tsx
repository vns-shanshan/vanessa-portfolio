import arrow from "@/assets/arrow.svg";
import ExperienceList from "@/components/features/Experience/ExperienceList";

export interface Experience {
  title: string;
  position: string;
  year: string;
}

const experiences: Experience[] = [
  {
    title: "General Assembly",
    position: "Software Engineer Fellows",
    year: "2024",
  },
  {
    title: "Marco Polo Children's School",
    position: "Childcare Teacher",
    year: "2021-2022",
  },
  {
    title: "LePort Montessori Irvine Mandarin Immersion",
    position: "Childcare Teacher",
    year: "2019-2021",
  },
  {
    title: "University of California, Irvine",
    position: "Student",
    year: "2016-2018",
  },
  {
    title: "Pasadena City College",
    position: "Student",
    year: "2014-2016",
  },
];

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col l:gap-8 gap-6">
      <div>
        <h1 className="text-secondary-light dark:text-secondary-dark font-semibold font-playfair-display l:text-2xl m:text-xl s:text-l">
          Experience
        </h1>
      </div>

      <ExperienceList experiences={experiences} />

      <div>
        <a
          href="/resume.pdf"
          className="group flex items-center gap-2 transition font-dm-sans text-accent-light dark:text-accent-dark  l:text-xl text-l"
        >
          View My Resume
          <span className="pt-0.5 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2">
            <img alt="arrow-right" src={arrow} />
          </span>
        </a>
      </div>
    </div>
  );
}
