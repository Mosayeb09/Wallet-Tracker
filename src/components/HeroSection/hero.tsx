// "use client";

// import Link from "next/link";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import { useEffect, useRef } from "react";

// const HeroSection = () => {
//     const imageRef = useRef<HTMLDivElement | null>(null); // Define the type properly

//   useEffect(() => {
//     const imageElement = imageRef.current;
//     if (!imageElement) return; // Ensure the element exists before applying class changes

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//     //   if (scrollPosition > scrollThreshold) {
//     //     imageElement.classList.add("scrolled");
//     //   } else {
//     //     imageElement.classList.remove("scrolled");
//     //   }
//     if (scrollPosition > scrollThreshold) {
//         imageRef.current.classList.add("hero-image-scrolled"); // ✅ Use correct class
//       } else {
//         imageRef.current.classList.remove("hero-image-scrolled"); // ✅ Use correct class
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="pb-20 px-4">
//       <div className="container mx-auto text-center">
//         <h1 className=" text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title ">
//           Manage Your Finances <br /> with Intelligence
//         </h1>
//         <p className="text-xl  text-gray-600 mb-8 max-w-2xl mx-auto">
//           An AI-Powered financial management platform that helps you track,
//           analyze, and optimize your finances, from budgeting to spending with
//           real-time insights.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Link href={"/dashboard"}>
//             <Button size={"lg"} className="px-8">
//               Get Started
//             </Button>
//           </Link>
//           <Link href={"/dashboard"}>
//             <Button size={"lg"} variant={"outline"} className="px-8">
//               Watch Demo
//             </Button>
//           </Link>
//         </div>
//         <div className="hero-image-wrapper">
//           <div ref={imageRef} className="hero-image">
//             <Image
//               src="/asset/banner.jpeg"
//               alt="Dashboard Preview"
//               width={1280}
//               height={720}
//               className=" rounded-lg shadow-2xl mx-auto"
//             ></Image>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  // Optimized handleScroll with useCallback
  const handleScroll = useCallback(() => {
    if (!imageRef.current) return;
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
      imageRef.current.classList.add("hero-image-scrolled");
    } else {
      imageRef.current.classList.remove("hero-image-scrolled");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-Powered financial management platform that helps you track,
          analyze, and optimize your finances, from budgeting to spending with
          real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image transition-all duration-300">
            <Image
              src="/asset/banner.jpeg"
              alt="Dashboard Preview"
              width={1280}
              height={720}
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
