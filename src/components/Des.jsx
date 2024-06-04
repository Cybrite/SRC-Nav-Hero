const Des = () => {
  return (
    <section>
     
      
        <div className="w-full text-center bg-orange-2 ">
      <h1 className="py-3 text-4xl md:text-5xl font-semibold leading-tight md:leading-[72px]">
        Conference Registration
      </h1>
      <p className="w-full py-5 px-4 md:px-[50px] lg:[30px] font-Poppins text-lg md:text-2xl leading-7 md:leading-9 text-left mx-auto max-w-6xl">
        Attention students! Registrations for Student Regional Conference 2023
        are LIVE! Click on the REGISTER link given below. For the steps on how to
        register, click on the HELP link. Join us for knowledge, inspiration, and connection.
        Engage with brilliant minds, explore various fields, and attend captivating sessions.
        Stay tuned to our website and social media for updates. Don&apos;t miss your chance to
        shape the future at the Student Regional Conference 2023. Welcome aboard, eager learners.
        The countdown begins now!
      </p>
      <div className="w-full flex justify-center h-full md:h-[340.42px] pb-5">
        <div className="w-full md:w-[1000px] h-full flex  md:flex-row justify-evenly gap-4 md:gap-[90px]">
          <button className="relative w-[140px] md:w-[180px] h-[50px] md:h-[70px] text-lg md:text-2xl font-semibold border-2 rounded-2xl bg-brown-2 border-brown-5 shadow-button transition ease-in-out duration-300">
            Help
            <span className="absolute inset-0 transition duration-300 ease-in-out transform translate-x-2 translate-y-2 border-b-2 border-r-2 active:translate-x-0 active:translate-y-0 rounded-xl border-r-brown-5 border-b-brown-5"></span>
          </button>

          <button className="w-[140px] md:w-[180px] h-[50px] md:h-[70px] active:shadow-none transition ease-in-out duration-300 border-2 rounded-2xl border-brown-5 bg-orange-1 shadow-button1 shadow-brown-5 text-lg md:text-2xl font-semibold">
            Register
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Des;
