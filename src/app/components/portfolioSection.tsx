import PortfolioCard from './portfolioCard';

export default function PortfolioSection() {
  return (
    <>
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center">
        <h1 className="absolute top-7 text-[36px] font-bold text-white">Portfolio</h1>
        <div className="absolute top-28 flex flex-row items-center justify-center gap-8">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </>
  );
}
