import Services from "@/components/home/Services";
import Welcome from "@/components/home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <Welcome /> */}

      <div className=" w-full ">
        <Welcome />

        <Services />
      </div>
    </div>
  );
}
