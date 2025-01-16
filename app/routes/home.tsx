import type { Route } from "./+types/home";

import Welcome from "../components/home/Welcome";
import Services from "../components/home/Services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MediaPitch - Professional Writing Services" },
    { name: "description", content: "MediaPitch offers expert writing, editing, rewriting, and digital content creation services to elevate your brand's presence." },
    { name: "keywords", content: "writing services, content creation, editing, rewriting, professional writing, digital media, content writing, brand storytelling" },
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
