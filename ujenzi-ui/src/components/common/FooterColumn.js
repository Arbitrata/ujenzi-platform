import { Link } from "react-router-dom";

const FooterColumn = ({ iconPresent, title, link, to, icon }) => {
  return (
    <div className="text-lefth-fit block">
      <h1 className="font-bold text-2xl text-ujenzi-white">{title}</h1>
      {iconPresent ? (
        <a
          href={to}
          className="text-[16px] hover:underline cursor-pointer pt-2 text-ujenzi-white font-normal hover:text-ujenzi-white flex items-center"
        >
          <span>{icon}</span>
          <span className="ml-2">{link}</span>
        </a>
      ) : (
        <div className="text-[16px] pt-2 text-ujenzi-white font-normal hover:underline">
          <Link to={to}>{link}</Link>
        </div>
      )}
    </div>
  );
};

export default FooterColumn;
