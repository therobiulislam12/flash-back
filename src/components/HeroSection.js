import PrimaryButton from "./PrimaryButton";
import heroImg from '../assets/hero-img.jpg';

const HeroSection = () => {
  return (
    <div className="lg:flex justify-between items-center lg:space-x-8 py-12 lg:py-20 lg:gap-8 space-y-4">
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#00E3AA]">Find your dream</h1>
        <h2 className="text-2xl font-semibold">
          Flash Back is a online used camera selling website. If you have any
          used camera and you want to sell it and buy a new, so it's the best
          place for you.
        </h2>
        <p className="text-lg">
          Details potential buyers will wish to know include the model of the
          camera, the condition, when it was bought and any known defect or
          damage. Start the selling process by getting all the details you can
          about the gear that you own. You'll get the most accurate quotes and
          the most interested buyers
        </p>
        <PrimaryButton>Buy Now</PrimaryButton>
      </div>
      <img src={heroImg} alt="hero-area" className="rounded-lg w-full lg:w-1/2"/>
    </div>
  );
};

export default HeroSection;
