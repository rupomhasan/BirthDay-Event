import LocalTheme from "../../Components/Common/LocalTheme";
import TeamMember from "../../Components/Common/TeamMember";
import HelpDex from "../Home/HelpDex";

const ContactUs = () => {
  const title = "Contact Us";
  return (
    <div>
      <div>
        <LocalTheme title={title} />
      </div>
      <div>
        <TeamMember />
        <HelpDex />
      </div>
    </div>
  );
};

export default ContactUs;
