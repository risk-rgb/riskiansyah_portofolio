import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      {/* Garis pemisah */}
      <div className="mb-4 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      {/* Link kebijakan */}
      <div className="flex gap-2">
        <a href="/terms" className="hover:underline">Terms & Conditions</a>
        <span>|</span>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </div>

      {/* Ikon sosial media */}
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <img
              src={`${import.meta.env.BASE_URL}${social.icon}`}
              alt={social.name}
              className="w-5 h-5 hover:scale-110 transition-transform"
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p>© 2025 Riski. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
