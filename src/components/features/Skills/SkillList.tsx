type SkillListProps = {
  title: string;
  items: string[];
};

export default function SkillList({ title, items }: SkillListProps) {
  return (
    <div className="flex flex-col l:gap-4 m:gap-2">
      <h2 className="l:text-xl text-l font-semibold font-dm-sans text-text-important-light">
        {title}
      </h2>

      <ul className="flex flex-col l:gap-1.5 gap-1">
        {items.map((item) => (
          <li className="text-text-light font-dm-sans l:text-l text-m">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
