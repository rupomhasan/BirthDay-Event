import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const TeamMember = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/public/teamMember.json")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-20 ">
      <div className="text-center space-y-3 my-14">
        <p className="font-medium text-2xl font-Pacifico">Our best team</p>
        <h3 className="font-Rubik text-4xl md:text-5xl font-extrabold text-vivid-red">
          Our Team Of Professionals
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-4 mx-5">
        {members.map((member) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            key={member.id}
            className="bg-gray200 rounded-tr-3xl rounded-bl-3xl"
          >
            <div>
              <div>
                <img className="rounded-tr-3xl" src={member.image} />
              </div>
              <div className="p-10 space-y-3 text-center">
                <p className="text-3xl font-bold text-gray700 ">
                  {member.name}
                </p>
                <p className="text-xl font-medium text-gray500">
                  {member.position}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
