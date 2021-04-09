import { GITHUB_LINK } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="py-2 w-full flex flex-col lg:flex-row items-center justify-center">
        <a
          href="https://kijowski.dev"
          className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
        >
          kijowski.dev
        </a>
        <a href={GITHUB_LINK} className="mx-3 font-bold hover:underline">
          View on GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
