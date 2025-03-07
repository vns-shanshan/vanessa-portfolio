import arrow from "@/assets/arrow.svg";

export default function Hero() {
  return (
    <div
      id="home"
      className="l:w-[50%] m:w-[60%] l:mt-40 mt-30 flex flex-col l:gap-16 m:gap-12 s:gap-10"
    >
      <div>
        <h1 className="font-playfair-display font-semibold l:text-2xl m:text-xl s:text-l text-secondary-light">
          Software Engineer
        </h1>
      </div>

      <div className="flex flex-col l:gap-6 m:gap-4 s:gap-2">
        <p className="font-dm-sans l:text-l m:text-l s:text-m text-text-light">
          Hi, I'm{" "}
          <span className="font-bold l:text-xl text-l text-text-important-light">
            Huijing Jin
          </span>
          .
        </p>
        <p className="font-dm-sans l:text-l m:text-l s:text-m text-text-light">
          I am a creative web developer with strong problem-solving skills, with
          the ability to stay calm and focused when tackling challenges.
        </p>
      </div>

      <div>
        <a
          href="mailto:vanessajin0426@gmail.com"
          className="group flex items-center gap-2 transition font-dm-sans text-accent-light l:text-xl text-l"
        >
          Hire Me
          <span className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2">
            <img alt="arrow-right" src={arrow} />
          </span>
        </a>
      </div>
    </div>
  );
}
