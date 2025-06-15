// TopHeader.jsx

import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 h-6 w-full flex justify-center items-center bg-black z-40 px-2  md:px-4 md:h-14">
      <div className="bg-black flex justify-between items-center h-8 lg:px-64 ">
        <div className="text-white flex justify-center gap-8 items-center flex-1">
          <h1 className="text-[13px] max-w-[200px] md:max-w-full md:text-sm">
            {i18n.t("topHeader")}
          </h1>
          <Link to="/allProducts">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[16px] md:text-[18px] font-semibold underline whitespace-nowrap"
            >
              {i18n.t("shop")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
