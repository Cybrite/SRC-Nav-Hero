import  Des  from "./components/Des";
import  Hero  from "./components/Hero";
import Nav  from "./components/Nav";
import  WaveDivider  from "./components/WaveDivider";
import "./index.css";


export default function App() {
  return (
    <div className="flex justify-center overflow-x-hidden bg-black-1 font-Poppins ">
      <div className="md:py-5 bg-black-1 bg-stars  lg:max-w-[1440px] w-100% bg-fixed  ">
        
        <Nav />
        <Hero />
        <WaveDivider />
        <Des />
      </div>
    </div>
  );
}

