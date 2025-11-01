import Image from "next/image";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";

import { Fragment } from "react";

const testimonials = [
  {
    name: "Jitendra Chowudhary",
    position: "CTO @ Nirmitee",
    text: "During his Frontend Development internship at Nirmitee, he demonstrated exceptional skills in React and modern web technologies. His ability to translate complex designs into pixel-perfect, responsive interfaces was impressive. He consistently delivered high-quality code and showed great potential for growth.",
    avatar: memojiAvatar1,
  },
  {
    name: "Shubham Chauragade",
    position: "Founder @ Next24Tech",
    text: "As a Software Engineer Intern at Next24Tech, he played a crucial role in developing our EdTech platform. His technical expertise in building interactive learning modules and user-friendly interfaces significantly enhanced our platform's user experience. He's a dedicated developer with strong problem-solving skills.",
    avatar: memojiAvatar2,
  },
  {
    name: "Tarun",
    position: "Tech Lead @ Antino",
    text: "Working with him on the RxMen project was exceptional. He managed the entire project end-to-end with remarkable efficiency and delivered a robust tech solution that we integrated at Antino. His project management skills combined with technical expertise made the collaboration seamless and successful.",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Testimonials
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          What Colleagues Say About Me
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          Hear from the CTOs, founders, and tech leads I've worked with
          throughout my career.
        </p>
        <div className="mt-12 lg:mt-20 flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="bg-gray-800 rounded-3xl p-6 md:p-8 max-w-xs md:max-w-md flex-none"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
