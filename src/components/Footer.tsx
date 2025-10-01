import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full mt-12">
      {/* Setengah lingkaran background */}
      <div className="w-full h-32 bg-red-500 rounded-t-[60px] flex flex-col items-center justify-center shadow-inner">
        {/* Teks made by */}
        <p className="text-white font-normal mb-3">
          Made by: <span className="font-bold">yanrieru</span>
        </p>

        {/* Social media icons */}
        {/* <div className="flex gap-5 text-white text-xl">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaLinkedin />
          </a>
        </div> */}

        {/* Space ekstra untuk extension GitHub Pet */}
        <div className="mt-3 text-xs text-white/70">
          <em>Coming soon: GitHub Pet 🐾</em>
        </div>
      </div>
    </footer>
  );
}
