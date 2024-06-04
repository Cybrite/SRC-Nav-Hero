const Hero  = () => {
  return (
    <div className="w-100% h-100%">
      <section>
        <div className="flex justify-center">
          <img src="src/assets/Frame-h-m.png" alt="Main Frame" className="w-100% md:max-w-[1000px] object-contain" />
        </div>
      </section>
      <div className="w-full flex justify-end mt-5 mb-[-1]">
        <div className="relative w-70% max-w-[400px] md:max-w-[600px] lg:max-w-[1000px]">
          <img
            src="src/assets/Group 2.png"
            alt="Back"
            className="object-cover w-full h-auto animate-round"
          />
          <img
            src="src/assets/Vector 9.png"
            alt="Overlay"
            className="absolute left-[70px] top-[60px] w-[26.71px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;