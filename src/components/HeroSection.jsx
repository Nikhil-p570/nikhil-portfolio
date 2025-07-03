import { ArrowDown } from "lucide-react";
import { RocketLaunch } from "./RocketLaunch";

export const HeroSection = () => {
  return (
    <>
    <RocketLaunch/>
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT: Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Nikhil</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Pabbisetti
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* RIGHT: Profile Photo */}
        <div className="flex justify-center md:justify-end">
  <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-primary transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_8px] hover:shadow-primary group">
    <img
      src="https://res.cloudinary.com/dfc8a9imb/image/upload/c_crop,w_250,h_400,g_auto/v1751541568/profile_xzc4h2.jpg"
      alt="Nikhil Pabbisetti"
      className="w-full h-full object-cover"
    />
    
    {/* Base glow animation */}
    <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl z-[-1] animate-pulse"></div>

    {/* Extra hover glow */}
    <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 pointer-events-none"></div>
  </div>
</div>

      </div>

      {/* Bottom Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
    </>
  );
};
