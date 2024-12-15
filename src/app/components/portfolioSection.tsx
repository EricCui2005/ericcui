import PortfolioCard from './portfolioCard';

export default function PortfolioSection() {
  return (
    <>
      <div className="debug relative flex h-[75vh] w-full flex-col items-center justify-center">
        <h1 className="absolute top-10 text-[36px] font-bold text-white">Portfolio</h1>
        <PortfolioCard />
      </div>
    </>
  );
}
