import type { Route } from "./+types/home";

import Homebackground from "~/components/homebackground";
import Header from "~/components/header";
import Welcome from "~/components/home/Welcome";
import Services from "~/components/home/Services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MediaPitch" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div className="">
    {/* <Welcome /> */}
    
    <div className=" w-full ">
      <Welcome/>

      <Services/>
    </div>
    
  </div>;
}
