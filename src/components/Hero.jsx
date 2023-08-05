import Cartoon from "../assets/images/cartoon.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="w-full max-w-[750px] flex items-center justify-center mb-12 border border-charcoal bg-white dark:bg-gray-200 dark:border-off-white">
      <section className="flex items-center flex-col justify-center sm:flex-row px-10 pt-5">
        <div className="flex-column items-center h-[230px] sm:h-auto sm:w-75 ">
          <div
            aria-label={"Fumbling for the right word to say?"}
            className="mb-5"
          >
            <TypeAnimation
              sequence={["Fumbling"]}
              speed={30}
              cursor={false}
              className="font-schoolbell text-dark-red text-3xl"
            />

            <TypeAnimation
              sequence={[800, " for the right word to say?"]}
              speed={70}
              cursor={false}
              className="text-2xl"
            />
          </div>

          <div
            aria-label={"Let TalkBack lend you a virtual helping hand!"}
            className="mb-5 "
          >
            <TypeAnimation
              sequence={[2300, "Let"]}
              speed={50}
              cursor={false}
              className="text-2xl"
            />

            <TypeAnimation
              sequence={[2500, " TalkBack"]}
              speed={20}
              cursor={false}
              className="text-dark-blue font-fredericka text-3xl"
            />

            <TypeAnimation
              sequence={[3200, " lend you a virtual helping hand!"]}
              speed={70}
              cursor={false}
              className="text-2xl"
            />
          </div>
        </div>
        <img
          src={Cartoon}
          alt="a male cartoon looking having no idea what to say"
          className="w-[200px] sm:w-auto h-auto max-w-[230px]"
        />
      </section>
    </section>
  );
};

export default Hero;
