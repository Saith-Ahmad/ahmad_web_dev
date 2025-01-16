import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import { BorderBeam } from "../ui/border-beam";
import { TextAnimate } from "../ui/text-animate";
import { reviews } from "@/constants";
import Image from "next/image";


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4 custom_card_class",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="img" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <div>
    <div className=" mb-12 min-h-[100vh] relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
      <div className="flex flex-col justify-center items-center gap-2 container">
        <div className="relative p-3 rounded-full px-6 py-2 transition duration-300 text-d_bg_purple_dark dark:text-white font-normal text-base shadow-[inset_0_0_20px_#590ab4f9] dark:shadow-[inset_0_0_20px_#c298f5b8]">
            Client Success Stories
          <BorderBeam
            size={50}
            anchor={12}
            borderWidth={2}
            colorFrom="#4A148C"
            colorTo="#D8B4FE"
            duration={5}
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <TextAnimate animation="blurInUp" by="character" className='dark:text-white text-text_purple text-4xl  md:text-5xl lg:text-6xl text-center font-semibold'>
          Delivering Excellence
          </TextAnimate>
          <p className="text-xl text-center max-w-[750px] dark:text-gray-300 mt-2">
          My clients speak volumes about the quality and dedication I bring to every project.
          </p>
        </div>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] mt-3">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#ffffff50] dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#ffffff50] dark:from-background"></div>
    </div>
    </div>
  );
}
