const Extra = () => {
  return (
    <div className="font-Rubik ">
      <div className="grid  md:grid-cols-2 my-20 gap-5">
        <div className="flex flex-col justify-center space-y-10  xl:ml-48 px-5" >
          <h2 className=" text-5xl md:text-6xl text-gray700 lg:text-8xl font-extrabold">
            What we,
            <br />
            offer
          </h2>
          <p className="text-gray600 font-semibold text-xl max-w-xl">
            Each event and client is unique and we believe out services should
            be as well. We know that it should be "Can I hire a planner?" not
            "Can I affored one?"
          </p>
          <button className=" btn rounded-full text-xl btn-lg max-w-sm px-10 bg-btn-bg border-none hover:bg-vivide-amber  text-white">
            More Services
          </button>
        </div>
        <div >
          <img src="/src/assets/girls-withCake.jpg" alt="cake-with-girls" />
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center w-full h-[90vh] bg-[url('/src/assets/people-party.jpg')] bg-cover bg-gray700 bg-blend-multiply  ">
        <h2 className="text-yellow text-5xl md:text-8xl font-extrabold">
          We create,
          <br /> you-
          <br />
          celebrate!
        </h2>
        <p className="font-Pacifico my-4 text-white font-semibol text-xl md:text-2xl">
          Order birthday pachage from
          <span className=" text-center block md:inline-block font-Montserrat text-4xl text-btn-bg font-extrabold">
            $150
          </span>
        </p>
        <button className="my-10 btn rounded-full text-xl btn-lg px-10 bg-white border-none hover:bg-vivide-amber  hover:text-white">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Extra;
