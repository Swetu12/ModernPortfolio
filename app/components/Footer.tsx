import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { profile } from "console";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative pb-2 mb-5 " id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> outside
          digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <Link href="mailto:alexandrugeroc2007@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Alexandru
        </p>
        {/* <div className="flex items-center md:gap-3 lg:gap-6">
          {socialMedia.map(profile) => (<div key={profile.id}><img src={profile.img} alt={profile.id} width={20} height={20} /></div>)}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
