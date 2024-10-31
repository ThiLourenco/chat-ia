import { SiGithub } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="rounded-lg w-auto shadow m-4 bg-gray-900 dark:bg-black">
      <div className="flex flex-col items-center mb-5 ">
        <span className="text-zinc-400 hover:text-zinc-100 transition-colors text-1xl leading-tight text-center lg:mb-0">
        <p>© {new Date().getFullYear()} Miles Davis - AI </p>  <a href="https://github.com/thilourenco/" title="Thiago Lourenço" target="_blank" rel="noopener noreferrer" className="hover:underline">by Thiago Lourenço</a>
        </span>
        <div className="flex flex-row gap-3 p-4 justify-center items-center text-white lg:w-1/2">
          <a
            href="https://github.com/thilourenco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub title="Github" size={25} className="text-zinc-400 hover:text-zinc-100" />
          </a>
          <a
            href="https://vercel.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoVercel title="Vercel" size={25} className="text-zinc-400 hover:text-zinc-100"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;