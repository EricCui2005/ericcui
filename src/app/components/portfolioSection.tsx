import PortfolioCard from './portfolioCard';

export default function PortfolioSection() {
  return (
    <>
      <div className="relative flex h-[75vh] w-full flex-col items-center justify-center">
        <div className="relative flex flex-row justify-center gap-6">
          <h1 className="absolute top-10 text-[36px] font-bold text-white">Portfolio</h1>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </>
  );
}
