import React from "react";
import Image from "next/image";
import Link from "next/link";

const StickyLinks = () => {
  return (
    
      <div className="fixed z-20 lg:left-32 lg:top-4 max-lg:hidden">
        <Image
          className="opacity-30"
          src="/images/crypto_logo.svg"
          alt="UC Cryptocurrency Club"
          width={110}
          height={110}
        />
      </div>
    
  );
};

export default StickyLinks;
