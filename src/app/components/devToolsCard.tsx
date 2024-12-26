import SkillCard from './skillCard';
import SkillBlock from './skillBlock';

export default function DevToolsCard({ title }) {
  return (
    <>
      <SkillCard title={title}>
        <SkillBlock label="Git" img={'/git.png'} />
        <SkillBlock label="GitHub" img={'/gitHub.png'} />
        <SkillBlock label="Jira" img={'/jira.png'} />
        <SkillBlock label="BitBucket" img={'/bitBucket.png'} />
        <SkillBlock label="VS Code" img={'/vsCode.png'} />
        <SkillBlock label="GitKraken" img={'/gitKraken.svg'} />
        <SkillBlock label="Azure" img={'/azure.png'} />
        <SkillBlock label="PyCharm" img={'/pyCharm.png'} />
        <SkillBlock label="Google Colab" img={'/googleColab.png'} />
        <SkillBlock label="Vercel" img={'/vercel.svg'} />
      </SkillCard>
    </>
  );
}
