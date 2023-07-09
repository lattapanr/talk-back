import Cartoon from "../assets/images/cartoon.png";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center mb-12">
      <section className="flex flex-center">
        <div className="flex-column items-center">
          <h1 className="text-3xl">
            <span className="font-schoolbell text-dark-red">Fumbling</span> for
            the right words to say?
          </h1>

          <p className="text-2xl">
            Let{" "}
            <span className="text-dark-blue font-fredericka text-3xl">
              TalkBack
            </span>{" "}
            lend you a helping virtual hand!
          </p>
        </div>
        <img
          src={Cartoon}
          alt="a male cartoon looking having no idea what to say"
          className="w-auto h-auto"
        />
      </section>
    </section>
  );
};

export default Hero;
