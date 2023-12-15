import { LiaBirthdayCakeSolid } from "react-icons/lia";

const Logo = () => {
  return (
    <div className="flex items-center ml-2 text-white ">
      <LiaBirthdayCakeSolid className="text-yellow-dark font-extrabold text-5xl mb-2 " />
      <p className="font-Montserrat text- text-xl mt-2 font-semibold">
        <span className="text-2xl">P</span>arty
        <span className="text-yellow ">
          <span className="text-2xl">H</span>arbor
        </span>
      </p>
    </div>
  );
};

export default Logo;
