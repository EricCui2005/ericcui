import SkillBlock from './skillBlock';
import SkillCard from './skillCard';

export default function TechnologiesCard({ title }) {
  return (
    <>
      <SkillCard title={title}>
        <SkillBlock label="React" img={'/react.png'} />
        <SkillBlock label="Next.js" img={'/next.png'} />
        <SkillBlock label="Tailwind" img={'/tailwind.png'} />
        <SkillBlock label="Flask" img={'/flask.svg'} />
        <SkillBlock label="Node.js" img={'/node.png'} />
        <SkillBlock label=".NET" img={'/NET.png'} />
        <SkillBlock label="TensorFlow" img={'/tensorFlow.png'} />
        <SkillBlock label="Pytorch" img={'/pytorch.png'} />
        <SkillBlock label="MongoDB" img={'/mongo.svg'} />
        <SkillBlock label="CloudFlare" img={'/cloudFlare.png'} />
      </SkillCard>
    </>
  );
}
