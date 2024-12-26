import SkillBlock from './skillBlock';
import SkillCard from './skillCard';

export default function LanguagesCard({ title }) {
  return (
    <>
      <SkillCard title={title}>
        <SkillBlock label="Python" img={'/python.png'} />
        <SkillBlock label="C++" img={'/cpp.png'} />
        <SkillBlock label="C#" img={'/csharp.png'} />
        <SkillBlock label="C" img={'/C.png'} />
        <SkillBlock label="TypeScript" img={'/typescript.png'} />
        <SkillBlock label="JavaScript" img={'/javaScript.png'} />
        <SkillBlock label="HTML" img={'/html.png'} />
        <SkillBlock label="CSS" img={'/css.svg'} />
        <SkillBlock label="Java" img={'/java.png'} />
        <SkillBlock label="Dart" img={'/dart.png'} />
        <SkillBlock label="Julia" img={'/julia.png'} />
      </SkillCard>
    </>
  );
}
