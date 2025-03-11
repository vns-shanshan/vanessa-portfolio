interface FullBgBtnProps {
  href: string;
  children: string;
}

export default function FullBgBtn({ href, children }: FullBgBtnProps) {
  return (
    <a
      href={href}
      className="relative text-accent-light dark:text-accent-dark  font-dm-sans font-medium l:text-l text-m 
             underline underline-offset-6 transition-all duration-300 
             before:absolute before:left-0 before:bottom-0 before:h-0 before:w-full 
             before:bg-accent-light before:transition-all before:duration-300 
             before:origin-bottom hover:text-primary-light dark:hover:text-primary-dark 
             hover:before:h-full"
    >
      <span className="relative hover:text-primary-light dark:hover:text-primary-dark">
        {children}
      </span>
    </a>
  );
}
