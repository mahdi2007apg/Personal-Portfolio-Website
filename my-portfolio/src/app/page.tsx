import React from "react";
import GithubIcon from "./../components/Icons/GithubIcon";
import XIcon from "./../components/Icons/XIcon";
import TelphoneIcon from "./../components/Icons/TelphoneIcon";
import EmailIcon from "./../components/Icons/EmailIcon";
import LinkedinIcon from "./../components/Icons/LinkedinIcon";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold ">Mahdi Mohammadi</h1>
      <h2 className="text-xl font-semibold mt-3 text-secondTitle">
        Junior Full Stack Developer <br />& CS Student
      </h2>
      <p className="text-thirdTitle pt-3">
        Junior full-stack developer following a structured learning path to
        graduate studies abroad.
      </p>
      <div className="flex space-x-4 mt-4 gap-2">
        <Link href="https://github.com/mahdi2007apg" target="_blank">
          <GithubIcon />
        </Link>

        <Link
          href="https://www.linkedin.com/in/mohammad-mahdi-mohammadi-485013382"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
        <Link href="https://x.com" target="_blank">
          <XIcon />
        </Link>
        <Link href="mailto:mahdimodev@gmail.com" target="_blank">
          <EmailIcon />
        </Link>
        <Link href="tel:+989192371955" target="_blank">
          <TelphoneIcon />
        </Link>
      </div>
      <div className="content pt-24">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-base text-thirdTitle leading-7 mt-4">
          I''m Mohammad Mahdi Mohammadi — a{" "}
          <b className="text-foreground">Computer Science student</b> and
          <b className="text-foreground"> junior full-stack developer </b>
          passionate about building clean, reliable systems.
        </p>
        <br />
        <p className="text-base text-thirdTitle leading-7 mt-4">
          {" "}
          Currently focused on honing my skills in{" "}
          <b className=" items-center rounded-full bg-teal-500/10 px-3 py-0.5 leading-5 text-foreground ">
            Next.js
          </b>
          ,
          <b className="items-center rounded-full bg-teal-500/10 px-3 py-0.5 leading-5 text-foreground ">
            TypeScript
          </b>
          ,
          <b className=" items-center rounded-full bg-teal-500/10 px-3 py-0.5 leading-5 text-foreground ">
            React
          </b>
          ,
          <b className=" items-center rounded-full bg-teal-500/10 px-3 py-0.5 leading-5 text-foreground ">
            Tailwind
          </b>
          ,
          <br />
          <b className=" items-center rounded-full bg-teal-500/10 px-3 py-0.5 leading-5 text-foreground ">
            PostgreSQL
          </b>{" and "}
          <b className=" items-center rounded-full bg-teal-500/10 px-3 py-0.5 leading-5 text-foreground ">
            SQLAlchemy
          </b>{" "}
          while deliberately following a structured learning path toward a
          Master's in Computer Science abroad (with strong interest in
          distributed systems, software engineering, and AI).
        </p>
        <br />
        <p className="text-base text-thirdTitle leading-7 mt-4 ">
          Beyond code, I create with electronics, woodworking, and music — and
          I'm gradually turning these experiences into workshops and educational
          content to help others develop multi-dimensional skills and grow
          beyond a single role. Open to opportunities in development,
          collaboration, or learning together.
        </p>
        <p className="text-sm text-muted-foreground my-4 pb-10">
          UI inspired by{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:underline"
          >
            Brittany Chiang's portfolio 
          </a>
          ,  | All code written by me from scratch.
        </p>
      </div>
    </>
  );
}
