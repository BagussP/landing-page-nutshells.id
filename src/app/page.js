"use client";
import { About } from "@/components/landing-page/about";
import { Contact } from "@/components/landing-page/contact";
import { Hero } from "@/components/landing-page/hero";
import { Members } from "@/components/landing-page/member";
import { News } from "@/components/landing-page/news";
import { Product } from "@/components/landing-page/product";
import { Service } from "@/components/landing-page/service";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Service />
      <Product />
      <About />
      <Members />
      <News />
      <Contact />
    </main>
  );
}

