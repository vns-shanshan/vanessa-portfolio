import arrow from "@/assets/arrow.svg";
import { Badge } from "@/components/ui/badge";
import FullBgBtn from "@/components/ui/FullBgBtn";
import { CardInfosProps } from "@/sections/Projects";

interface CardProp {
  card: CardInfosProps;
}

export default function Card({ card }: CardProp) {
  return (
    <div>
      <div className="l:mb-8 mb-6">
        <img src={card.photo} alt={`${card.title} photo`} />
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <a
            href={card.appLink}
            className="group flex items-center gap-2 font-medium transition font-dm-sans text-text-important-light dark:text-text-important-dark l:text-xl text-l"
          >
            {card.title}
            <span className="pt-0.5 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2">
              <img alt="arrow-right" src={arrow} />
            </span>
          </a>
        </div>

        <div className="l:w-[80%] w-[100%] flex flex-wrap l:gap-2 gap-1.5">
          {card.tags.map((tag, i) => (
            <div key={i}>
              <Badge
                variant="outline"
                className="border-accent-light dark:border-accent-dark !text-accent-light dark:!text-accent-dark ring-1 ring-accent-light l:text-m text-s"
              >
                {tag}
              </Badge>
            </div>
          ))}
        </div>

        <p className="l:w-[80%] w-[100%] text-text-light dark:text-text-dark font-dm-sans text-m/6">
          {card.description}
        </p>

        <div>
          <FullBgBtn href={card.codeLink}>Github</FullBgBtn>
        </div>
      </div>
    </div>
  );
}
