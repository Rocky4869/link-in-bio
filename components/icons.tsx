import Image from "next/image";
import { socialLinks } from "@/constants/index";

const Icons = () => {
  const getSocialHoverStyle = (index: number) => {
    const hoverStyles = [
      "hover:bg-[#3b5999]",
      "hover:bg-black",
      "hover:bg-gradient-to-br hover:from-[#833ab4] hover:to-[#fd1d1d]",
      "hover:bg-[#cd201f]",
      "hover:bg-[#0077b5]",
    ];
    return hoverStyles[index];
  };

  return (
    <div className="social-menu mt-6">
      <ul className="flex justify-center items-center">
        {socialLinks.map((social, index) => (
          <li key={index} className="list-none mx-2">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group icon
                block w-12 h-12 rounded-full text-center
                bg-white/70 opacity-70
                shadow-[0px_7px_5px_rgba(0,0,0,0.5)]
                transition-all duration-500 ease-in-out
                hover:opacity-100 hover:scale-110 hover:-translate-y-2
                backdrop-blur-[10px] backdrop-saturate-[160%] backdrop-contrast-[180%]
                ${getSocialHoverStyle(index)}
              `}
              style={{
                backdropFilter: "blur(10px) saturate(160%) contrast(180%)",
                WebkitBackdropFilter:
                  "blur(10px) saturate(160%) contrast(180%)",
              }}
            >
              <div className="flex items-center justify-center h-full">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Icons;
