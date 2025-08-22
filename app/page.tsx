import Image from "next/image";
import Icons from "@/components/icons";
import Tabs from "@/components/tabs";
import { images } from "@/constants/index";

export default function Home() {
  return (
    <main className="flex mt-6 flex-col items-center">
      <Image
        src={images.myPhoto}
        width={120}
        height={120}
        alt="myphoto.png"
        className="rounded-full border-4 border-gray-300 hover:border-white hover:scale-110 transform transition duration-500 ease-in-out object-cover aspect-square shadow-lg hover:shadow-xl"
      />
      <div className="mt-4 border-2 border-gray-300 font-bold text-white text-sm bg-black rounded-xl opacity-80 py-1 px-2">
        @RockyTam
      </div>
      <Icons />
      <Tabs />
    </main>
  );
}
