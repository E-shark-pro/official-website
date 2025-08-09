'use client'
import React from "react";
import Lottie from "lottie-react";
import sharkAnimation from "@/public/learn-anmiation.json"; // adjust path

export default function SharkAnimation() {
  return (
    <div className="w-full h-full">
      <Lottie
        animationData={sharkAnimation}
        loop={true}
      />
    </div>
  );
}
