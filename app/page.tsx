import Image from "next/image";
import profilePic from "@/public/assets/img/image.png";
import Vanta from "@/components/vanta";
import Icons from "@/components/icons";
import Tabs from "@/components/tabs";
import "./app.css";

export default function Home() {
  return (
    <main>
      <Vanta />
      <div className="animated" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex mt-6 flex-col items-center">
          <div>
            <Image
              src={profilePic}
              alt="myphoto.jpg"
              className="rounded-full border-2 border-gray-300 hover:border-gray-500 hover:scale-110 transform transition duration-500 ease-in-out"
            />
          </div>
          <div className="mt-4 border-2 border-gray-300 font-bold text-white text-sm bg-black rounded-xl opacity-80 py-1 px-2">
            @RockyTam
          </div>
          <Icons />
        </div>
        <div>
          <Tabs />
        </div>
      </div>
    </main>
  );
}
