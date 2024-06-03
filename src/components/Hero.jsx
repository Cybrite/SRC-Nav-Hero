const Hero  = () => {
  return (
    <div className="w-100% h-100% ">
      <section className=" positon-relative">
        <div className="flex justify-center">
          <img src="src\assets\Frame-h-m.png"></img>
        </div>
      </section>
      <div className=" w-100% flex justify-end mt-5 mb-[-1]  ">
        <div className="relative">
          <img
            src="src\assets\Group 2.png"
            alt="Back"
            className="object-cover w-full h-full animate-round"
          />

          <img
            src="src\assets\Vector 9.png"
            alt="Over"
            className="absolute left-[70px] object-cover w-[26.71px] top-[60px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;