import  Des  from "./components/Des";
import  Hero  from "./components/Hero";
import Nav  from "./components/Nav";
import  WaveDivider  from "./components/WaveDivider";
import "./index.css";

export default function App() {
  return (
    <div className="flex justify-center bg-black-2 font-Poppins">
      <div className="py-5 bg-black-1 bg-stars w-[1440px] bg-fixed ">
        <Nav />
        <Hero />
        <WaveDivider />
        <Des />
      </div>
    </div>
  );
}

