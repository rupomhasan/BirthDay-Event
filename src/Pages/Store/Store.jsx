import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import LocalTheme from "../../Components/Common/LocalTheme";
const Store = () => {
  const title = "Store Here";
  const [name, setName] = useState([""]);
  const [card, setCard] = useState([]);
  const [coast, setCoast] = useState(0);
  const items = useLoaderData();

  const handlePurchase = (item) => {
    let amount = item.price;
    let title = item.title;

    console.log(amount);
    const isExist = items.find((matchItem) => matchItem.id === item.id);
    const newCard = [...card, item];

    isExist && setCard(newCard);
    card.forEach((singleItem) => {
      amount += singleItem.price;
      title = singleItem.title;
    });
    setName(...title);
    console.log(title);
    console.log(name);

    setCoast(amount);
    console.log(coast);
  };

  return (
    <div className="bg-gray200">
      <LocalTheme title={title} />

      <div className="max-w-screen-xl space-y-5  mx-auto lg:grid lg:grid-cols-3 lg: mt-36">
        <div className="col-span-2">
          <div>
            <p></p>
          </div>
          <div className="    grid md:grid-cols-2 gap-10 mx-5 ">
            {items.map((item, idx) => (
              <div key={idx} className="shadow-md">
                <div className="bg-gray   rounded-2xl ">
                  <img
                    src={item.image}
                    className="max-h-[400px] max-w-[711px] w-full "
                    alt=""
                  />
                  <p className="text-center font-bold text-2xl px-4 py-8">
                    {item.title}
                  </p>

                  <p className="text-center text-2xl font-extrabold ">
                    Price :
                    <span className="text-3xl text-orange">${item.price}</span>
                  </p>
                  <div className="text-center py-10">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handlePurchase(item)}
                      className="btn bg-orange hover:bg-btn-bg text-white text-lg rounded-full w-[60%] "
                    >
                      Bye Now
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex  text-gray700 justify-end  ml-5">
          <div className=" p-5 px-10 mr-5  bg-gray h-fit ">
            <p className="text-xl font-semibold underline ">Cart Items</p>
            {card.map((data, idx) => (
              <ul
                key={idx}
                className=" list-decimal my-3 bg-gray w-full text-xl font-bold rounded-none "
              >
                <ol className=" ">{data.title}</ol>
              </ul>
            ))}
            <div className=" overline w-[100%] ">
              <p className=" text-xl font-semibold py-10 ">
                Total Price :{coast} Taka
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
