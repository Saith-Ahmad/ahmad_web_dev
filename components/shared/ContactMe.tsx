
import { Instagram } from "lucide-react";
import { OrbitingCircles } from "../ui/orbiting-circles";
import Image from "next/image";


export function OrbitingCirclesContact() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg p-10">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center text-6xl font-semibold leading-none text-transparent from-white to-[#00000010]">
        Contact Me
      </span>

      <OrbitingCircles iconSize={40} duration={20}>
        <a href="https://wa.link/as7ln9" target="_blank" className="hover:scale-105"><Image src={'/whatsapp1.png' } alt="contact" width={80} height={80}/></a>
        <a href="https://www.instagram.com/saith_ahmad_13/" target='_blank' className="hover:scale-105"><Image src={'/instagram.png' } alt="contact" width={65} height={65}/></a>
        <a href="mailto:ahmadwebcrafts@gmail.com" target='_blank' className="hover:scale-105"><Image src={'/mail.png' } alt="contact" width={65} height={65}/></a>
        <a href="https://www.linkedin.com/in/muhammad-ahmad13/" target='_blank' className="hover:scale-105"><Image src={'/linkedin.png' } alt="contact" width={65} height={65}/></a>
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <a href="https://wa.link/as7ln9" target="_blank" className="hover:scale-105"><Image src={'/whatsapp1.png' } alt="contact" width={40} height={40}/></a>
        <a href="https://www.instagram.com/saith_ahmad_13/" target='_blank' className="hover:scale-105"><Image src={'/instagram.png' } alt="contact" width={40} height={40}/></a>
        <a href="https://www.linkedin.com/in/muhammad-ahmad13/" target='_blank' className="hover:scale-105"><Image src={'/linkedin.png' } alt="contact" width={40} height={40}/></a>
        <a href="mailto:ahmadwebcrafts@gmail.com" className="hover:scale-105"><Image src={'/mail.png' } alt="contact" width={40} height={40}/></a>
      </OrbitingCircles>
    </div>
  );
}
