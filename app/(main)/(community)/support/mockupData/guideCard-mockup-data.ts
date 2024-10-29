"use client";
import GettingStart from "@/public/images/Getting started.png";
import FAQ from "@/public/images/FAQs.png";
import HELPLINES from "@/public/images/HELPLINES.png";

export const guideCardData = [
  {
    id: "1",
    title: "A Guide to  Women Hub",
    coverImageUrl: GettingStart,
    description:
      "Learn about our community guidelines and policies to ensure a safe and welcoming environment for everyone.",
    info: "View guidelines",
    page: "guidelines",
  },
  {
    id: "2",
    title: "FAQs",
    coverImageUrl: FAQ,
    description:
      "Find answers to common questions and learn more about how to use Women Hub effectively.",
    info: `View FAQ’s`,
    page: "faqs",
  },
  {
    id: "3",
    title: "Helplines",
    coverImageUrl: HELPLINES,
    description:
      "Helpline provides access to various emergency contacts dedicated to supporting women in times of crisis.",
    info: "View Helplines",
    page: "helplines",
  },
];
