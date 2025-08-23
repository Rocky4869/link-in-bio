import instagram from "@/public/icons/instagram.svg";
import facebook from "@/public/icons/facebook.svg";
import youtube from "@/public/icons/youtube.svg";
import linkedin from "@/public/icons/linkedin.svg";
import X from "@/public/icons/X.svg";
import telegram from "@/public/icons/telegram.svg";
import whatsapp from "@/public/icons/whatsapp.svg";
import messenger from "@/public/icons/messenger.svg";
import home from "@/public/icons/home.svg";
import github from "@/public/icons/github.svg";
import { StaticImageData } from "next/image";

interface SocialLink {
  name: string;
  src: StaticImageData;
  href: string;
}

interface CommunityLink extends SocialLink {}

export const communityLinks: CommunityLink[] = [
  {
    name: "Home",
    src: home,
    href: "https://rocky-tam-portfolio.vercel.app/",
  },
  {
    name: "WhatsApp",
    src: whatsapp,
    href: "https://wa.me/85256880866",
  },
  {
    name: "Messenger",
    src: messenger,
    href: "https://www.messenger.com/t/100002597255921",
  },
  {
    name: "Telegram",
    src: telegram,
    href: "https://t.me/Rockylolo",
  },
  {
    name: "GitHub",
    src: github,
    href: "https://github.com/rocky4869",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    src: facebook,
    href: "https://www.facebook.com/profile.php?id=100007671552746",
  },
  {
    name: "X",
    src: X,
    href: "https://x.com/TamKi13059439",
  },
  {
    name: "Instagram",
    src: instagram,
    href: "https://www.instagram.com/loki_1009/",
  },
  {
    name: "YouTube",
    src: youtube,
    href: "https://www.youtube.com/channel/UCxq4ZUStvhnKmQHPOyXGZEw",
  },
  {
    name: "LinkedIn",
    src: linkedin,
    href: "https://www.linkedin.com/in/rocky-lok-ki-tam/",
  },
];

export const images = {
  myPhoto: "/images/myphoto.jpg", 
};
