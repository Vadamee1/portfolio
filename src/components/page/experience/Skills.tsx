import Logo from "./Logo";

export default function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
      <div className="flex gap-1 items-center">
        <Logo image="/images/skills/Next.png" width={35} />
        <p>NEXT.js</p>
      </div>
      <div className="flex gap-1 items-center">
        <Logo image="/images/skills/React.png" width={35} />
        <p>React</p>
      </div>
      <div className="flex gap-1 items-center">
        <Logo image="/images/skills/Typescript.png" width={35} />
        <p>Typescript</p>
      </div>
      <div className="flex gap-1 items-center">
        <Logo image="/images/skills/Node.png" width={35} />
        <p>Node.js</p>
      </div>
      <div className="flex gap-1 items-center">
        <Logo image="/images/skills/Postgresql.png" width={35} />
        <p>PostgreSQL</p>
      </div>
      <div className="flex gap-1 items-center">
        <Logo image="/images/skills/Prisma.png" width={35} />
        <p>prisma.io</p>
      </div>
    </div>
  );
}
