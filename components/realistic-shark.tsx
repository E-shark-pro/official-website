'use client'
import React from "react";
import Lottie from "lottie-react";
import sharkAnimation from "@/public/learn-anmiation.json"; // adjust path
import TeacherAnimation from "@/public/teacher-animation-larg.json"; // adjust path

export default function SharkAnimation() {
  return (
    <div className="w-full h-full">
      <Lottie
        animationData={TeacherAnimation}
        loop={true}

      />
    </div>
  );
}
