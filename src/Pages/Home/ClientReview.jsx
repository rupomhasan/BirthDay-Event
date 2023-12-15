import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
const ClientReview = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("/public/review.json")
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((error) => console.log(error));
  }, []);

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: true,
    speed: 1300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: false,
    prevArrow: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          //   initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //   initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="conatainer bg-gradient-to-t from-[#ffaa5f] to-[#fe7259] py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <p className=" font-Pacifico text-white font-bold text-2xl">
            Testimonials
          </p>
          <h3 className="my-5 text-5xl font-Montserrat font-bold text-yellow">
            Satisfied Clients About Us
          </h3>
        </div>
        <Slider className="my-10  " {...settings}>
          {reviews.map((singelReview) => (
            <div  key={singelReview.id}>
              <div className="text-center bg-white p-5 m-5 rounded-lg  ">
                <p className="text-2xl font-extrabold font-Rubik text-orange mb-3">
                  //
                </p>
                <div>
                  <p className="text-lg font-Rubik text-gray600 font-medium text-center">
                    {singelReview.review.slice(0, 90)}
                  </p>
                </div>
                <div className="flex justify-center">
                  <img className="p-4  h-32 w-32 mt-5 rounded-full" src={singelReview.profile_pic} />
                      </div>
                      <h4 className="font-bold text-xl mb-8 ">{singelReview.client_name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientReview;
