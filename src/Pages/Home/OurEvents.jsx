import { useEffect, useState } from "react";

const OurEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/public/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="text-center my-24">
      <p className="text-2xl font-medium italic font-Pacifico">Hellow there!</p>
      <h2 className="text-xl mt-3 text-vivid-red md:text-5xl font-Rubik font-extrabold">
        We'll make your next celebration <br /> very special!!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 gap-5 lg:max-w-screen-xl lg:mx-auto my-14">
        {events.map((event, idx) => (
          <div key={idx} className="mx-auto bg-gray200">
            <img  src={event.cardImage} alt="eventImgae" />
            <h3 className="py-10   text-2xl font-bold">
              {event.name}
            </h3>
          </div>
        ))}
      </div>
      <button className=" btn w-[200px] btn-lg  rounded-full  bg-btn-bg hover:bg-yellow-dark text-xl text-white font-extrabold">
      View more
              </button>
    </div>
  );
};

export default OurEvents;
