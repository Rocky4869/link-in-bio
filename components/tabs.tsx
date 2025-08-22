import Image from "next/image";
import { communityLinks } from "@/constants/index";

const Tabs = () => {
  return (
    <ul className="flex flex-col mt-6 items-center gap-4">
      {communityLinks.map((link, index) => (
        <li key={index} className="w-64 sm:w-96 group">
          <a
            href={link.href}
            className="flex justify-center items-center p-4 bg-black/50 backdrop-blur-md border border-gray-300/30 rounded-xl hover:bg-black/80 hover:border-gray-200/50 hover:scale-105 transition-all duration-300 ease-out shadow-xl hover:shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
          >
            <Image
              src={link.src}
              alt={link.name}
              width={24}
              height={24}
              className="mr-4 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-medium text-gray-100 group-hover:text-white transition-colors duration-300">
              {link.name === "Home" ? "Official Website" : link.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
