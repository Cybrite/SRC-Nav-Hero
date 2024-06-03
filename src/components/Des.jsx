const Des = () => {
  return (
    <section>
      <div className="bg-orange-2 w-100% text-center">
        <h1 className="py-3 text-5xl font-semibold leading-72">
          Conference Registration
        </h1>
        <p className="w-100% py-[30px] px-[50px] font-Poppins text-3xl leading-9 text-left">
          Attention students! Registrations for Student Regional Conference 2023
          are LIVE! Click on the REGISTER link given below . For the steps on
          how to register click on HELP link . Join us for knowledge,
          inspiration, and connection. Engage with brilliant minds, explore
          various fields, and attend captivating sessions. Stay tuned to our
          website and social media for updates. Don&apos;t miss your chance to
          shape the future at the Student Regional Conference 2023. Welcome
          aboard, eager learners. The countdown begins now!
        </p>
        <div className="w-100% flex justify-center h-[340.42px]">
          <div className="w-[1000px] h-100% flex justify-center gap-[90px]">
            <button className="relative w-[180px] h-[70px] text-3xl font-semibold border-2    rounded-2xl bg-brown-2 border-brown-5 shadow-button ">
              Help
              <span className="absolute inset-0 transition ease-in translate-x-2 translate-y-2 border-b-2 border-r-2 active:translate-x-0 active:translate-y-0 rounded-xl border-r-brown-5 border-b-brown-5 1s"></span>
            </button>

            <button className="w-[180px] h-[70px] active:shadow-none transition ease-in 1s border-2 rounded-2xl border-brown-5 bg-orange-1 shadow-button1 shadow-brown-5 text-3xl font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Des;
