import type { Route } from "./+types/home";

import Homebackground from "~/components/homebackground";
import Header from "~/components/header";
import Welcome from "~/components/home/Welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MediaPitch" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div className="">
    {/* <Welcome /> */}
    
    <div className=" bg-[#f7f7f7] md:pt-24 bg-gradient-to-r from-[#F3FEFD00] to-[#506ba8]">
      <Welcome/>
    </div>
    
  </div>;
}
