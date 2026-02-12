import React from "react";
import Link from "next/dist/client/link";
import PolymathIcon from './Icons/PolymathIcon';
import CodeIcon from "./Icons/CodeIcon";
import AcademiaIcon from "./Icons/AdemiaIcon";

function Navbar() {
  return (
    <div
      className="bg-foreground 2xl:invisible xl:invisible lg:invisible fixed bottom-0 left-0 right-0
     h-18 md:h-22 flex justify-center items-center gap-6 sm:gap-25    md:gap-35"
    >
      <Link href="/Work" className="text-background font-bold ">
        <span className="flex gap-4 justify-center items-center">
          <CodeIcon /> 
        </span>
        
        <p className="text-xs font-bold sm:text-lg md:text-2xl"
        >Profession</p>
      </Link>
      <Link href="/Academia" className="text-background font-bold ">
        <span className="flex gap-4 justify-center items-center">
          <AcademiaIcon />
        </span>
        <p className="text-xs font-bold sm:text-lg md:text-2xl">Academia</p>
      </Link>
      <Link href="/Polymath" className="text-background font-bold ">
                <span className="flex gap-4 justify-center items-center">
          <PolymathIcon />
        </span>
  
        <p className="text-xs font-bold sm:text-lg md:text-2xl">Polymath</p>
      </Link>
    </div>
  );
}

export default Navbar;
