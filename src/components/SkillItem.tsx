interface SkillProps {
  src: string;
  name: string;
}

function SkillItem({ src, name }: SkillProps) {
  return (
    <span className="skill">
      <img src={src} alt={name} />
    </span>
  );
}

export default SkillItem;
