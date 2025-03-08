export interface Contact {
  title: string;
  link: string;
}

const contacts: Contact[] = [
  {
    title: "Email",
    link: "mailto:vanessajin0426@gmail.com",
  },
  {
    title: "Github",
    link: "https://github.com/vns-shanshan",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/huijing-jin/",
  },
];

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col l:gap-8 gap-6 m:mb-24 s:mb-16">
      <div>
        <h1 className="text-secondary-light font-semibold font-playfair-display l:text-2xl m:text-xl s:text-l">
          Contact
        </h1>
      </div>

      <div className="flex gap-12 font-dm-sans font-medium l:text-l text-m text-text-important-light">
        {contacts.map((contact, i) => (
          <a
            key={i}
            href={contact.link}
            className="relative after:absolute after:left-0 after:bottom-[-2px] 
                       after:w-full after:h-[2px] after:bg-text-important-light 
                       after:scale-x-0 after:origin-left after:transition-transform 
                       after:duration-300 hover:after:scale-x-100 "
          >
            {contact.title}
          </a>
        ))}
      </div>

      <div>
        <p className="font-dm-sans font-medium text-s text-text-light">
          Designed & Developed by Huijing Jin 2025
        </p>
      </div>
    </div>
  );
}
