"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";

const Login: React.FC = () => {
  return (
    <>
      <TransitionElement>
        <main className="w-screen h-full grid grid-cols-2 gap-[0rem] items-center justify-items-start">
          <TransitionStart>{/* <LoginForm /> */} Login page</TransitionStart>
        </main>
      </TransitionElement>
    </>
  );
};

export default Login;
