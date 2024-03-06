

import { SiZendesk } from "react-icons/si";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const NotUserHeader = () => {
  return (
    <div className="flex items-center justify-between border-b py-2 px-4">
      <SiZendesk className="text-5xl cursor-pointer" />
      <Link className="text-black transition hover:text-blue-700" to="/login">
        <MdAccountCircle className="text-2xl" />
      </Link>
    </div>
  );
};

export default NotUserHeader;
