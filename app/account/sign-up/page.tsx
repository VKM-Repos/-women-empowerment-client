"use client";

import React, { useEffect, useState } from "react";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";

const SignUp: React.FC = () => {
  return (
    <TransitionElement>
      <main className="w-[90%] mx-auto h-full grid grid-cols-2 gap-[0rem] items-center justify-items-start">
        <TransitionStart>
          <h1>Sign up form</h1>
        </TransitionStart>
      </main>
    </TransitionElement>
  );
};

export default SignUp;
