import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import ScrollFloat from "./components/ScrollFloat/ScrollFloat";
import Carousel from "./components/Caraousel/Caraousel";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-y-hidden bg-[#19222d]">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#96A42F"
          hoverFillColor="#c6f10e"
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-6 col-span-12">
            <div className="flex flex-col items-center justify-center h-full pl-4">
              <div className="flex flex-col gap-4">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  duration={1.2}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.3}
                >
                  <div className="flex gap-2 items-center">
                    <h1 className="text-2xl font-bold">I'm Ready For Job</h1>
                    <RotatingText
                      texts={[
                        "Web Development",
                        "Frontend Dev",
                        "Full Stack Dev",
                      ]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#c6f10e] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <SplitText
                    text="I'm Heru Nur Cahyono"
                    className="text-6xl font-semibold text-center"
                    delay={35}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
                  <SplitText
                    text="Full Stack Developer"
                    className="text-6xl font-semibold text-center text-[#c6f10e]"
                    delay={75}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
                </div>
                <BlurText
                  text="I am a developer with expertise in React, Laravel, and MySQL. I am used to building scalable and maintainable full-stack applications, and implementing best practices in software development."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8"
                />
                <div className="flex items-center">
                  <a
                    href="https://drive.google.com/file/d/1Gz2occwNWdCqVi8M_lbo2JeBaM0g59p0/view?usp=sharing"
                    target="blank"
                  >
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className="px-8 py-4 rounded-full border"
                    >
                      Download CV
                    </GradientText>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 mt-10 md:mt-0 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
      <div className="container mx-auto h-screen">
        <ScrollVelocity
          texts={["My Skills", "Scroll Down"]}
          className="mt-8 text-[#c6f10e]"
        />
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 mt-12 p-4">
          <SpotlightCard
            className="hover:scale-110 transition-all"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img src="/assets/html-logo.png" alt="" />
          </SpotlightCard>
          <SpotlightCard
            className="hover:scale-110 transition-all"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img src="/assets/css.png" alt="" />
          </SpotlightCard>
          <SpotlightCard
            className="hover:scale-110 transition-all"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img src="/assets/js.png" alt="" />
          </SpotlightCard>
          <SpotlightCard
            className="hover:scale-110 transition-all"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img src="/assets/React.png" alt="" />
          </SpotlightCard>
          <SpotlightCard
            className="hover:scale-110 transition-all"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img src="/assets/laravel.png" alt="" className="lg:h-[200px]" />
          </SpotlightCard>
        </div>
      </div>
      <div className="h-screen w-full">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-[#c6f10e] mb-4">My Project</h1>
        </div>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}
