import Image from "next/image";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";

export default function Home() {
  return (
    <div className="mx-[8%]">
      <Navbar/>
      <Contents/>
    </div>
  );
}
