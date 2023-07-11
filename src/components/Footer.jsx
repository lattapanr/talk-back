const Footer = () => {
  return (
    <footer className="h-12 w-full flex justify-end items-end mb-4 md:h-28 md:mb-10">
      <p className="text-xs text-charcoal dark:text-off-white ">
        Made by{" "}
        <a
          href="https://github.com/lattapanr"
          target="_blank"
          className="italic hover:underline hover:text-park-green dark:hover:text-desert-gold"
        >
          Lattapan
        </a>
      </p>
    </footer>
  );
};

export default Footer;
