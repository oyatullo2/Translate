import { Link, useLocation } from "react-router-dom";
export const Sidebar = () => {
  const local = useLocation();

  const isActive = (path) => local.pathname === path;

  return (
    <>
      <div className="w-full animate-[SidebarLeftAnimation_0.6s_ease-out] flex flex-col justify-center">
        <div className="w-full mt-[120px] flex ml-[25px] flex-col">
          <Link to={"/home"}>
            <div
              style={{
                backgroundColor: isActive("/home") ? "#EFEFEF" : "",
              }}
              className="flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] w-full justify-start py-[15px] items-center gap-[16px]"
            >
              <i
                style={{
                  color: isActive("/home") ? "black" : "#BCBCBC",
                }}
                className="transition-all duration-150 ease-in-out mt-[5px] fa-solid fa-list text-[#BCBCBC] text-[20px]"
              ></i>
              <p
                style={{
                  color: isActive("/home") ? "black" : "#BCBCBC",
                }}
                className="transition-all duration-150 ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
              >
                Bo'limlar
              </p>
            </div>
          </Link>
          <Link to={"/subsections"}>
            <div
              style={{
                backgroundColor: isActive("/subsections") ? "#EFEFEF" : "",
              }}
              className="w-full flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] justify-start items-center py-[15px] gap-[16px]"
            >
              <i
                style={{
                  color: isActive("/subsections") ? "black" : "#BCBCBC",
                }}
                className="transition-all ml-[-3px] duration-150 ease-in-out fa-solid fa-layer-group text-[#BCBCBC] text-[20px]"
              ></i>
              <p
                style={{
                  color: isActive("/subsections") ? "black" : "#BCBCBC",
                }}
                className="transition-all duration-150 ease-in-out text-[#BCBCBC] font-[500] text-[17px] "
              >
                Kichik bo'limlar
              </p>
            </div>
          </Link>
          <Link to={"/words"}>
            <div
              style={{
                backgroundColor: isActive("/words") ? "#EFEFEF" : "",
              }}
              className="w-full flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] justify-start items-center py-[15px] gap-[16px]"
            >
              <i
                style={{ color: isActive("/words") ? "black" : "#BCBCBC" }}
                className=" transition-all mr-[2px] duration-150 ease-in-out fa-solid fa-file-word text-[#BCBCBC] text-[20px]"
                onClick={() => setCloseCart(true)}
              ></i>
              <p
                style={{ color: isActive("/words") ? "black" : "#BCBCBC" }}
                className="relative w-full transition-all duration-150 ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
                onClick={() => setCloseCart(true)}
              >
                So'zlar
              </p>
            </div>
          </Link>
          <Link to={"/addAdmin"}>
            <div
              style={{
                backgroundColor: isActive("/addAdmin") ? "#EFEFEF" : "",
              }}
              className="w-full flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] justify-start items-center py-[15px] gap-[16px]"
            >
              <i
                style={{ color: isActive("/addAdmin") ? "black" : "#BCBCBC" }}
                onChange={() => setCloseOrder(true)}
                className=" transition-all duration-150 ease-in-out fa-solid fa-user text-[#BCBCBC] text-[20px]"
              ></i>
              <p
                style={{ color: isActive("/addAdmin") ? "black" : "#BCBCBC" }}
                className=" transition-all w-full duration-150 relative ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
                onClick={() => setCloseOrder(true)}
              >
                Admin qo'shish
              </p>
            </div>
          </Link>
          <div
              style={{
                backgroundColor: isActive("/cart") ? "#EFEFEF" : "",
              }}
              className="w-full flex cursor-pointer transition-all duration-150 ease-in-out pl-[15px] rounded-[12px] max-w-[267px] justify-start items-center py-[15px] gap-[16px]"
            >
              <i
                style={{ color: isActive("/cart") ? "black" : "#BCBCBC" }}
                onChange={() => setCloseOrder(true)}
                className=" transition-all duration-150 ease-in-out fa-solid fa-right-from-bracket text-[#BCBCBC] text-[20px]"
              ></i>
              <p
                style={{ color: isActive("/cart") ? "black" : "#BCBCBC" }}
                className=" transition-all w-full duration-150 relative ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
                onClick={() => setCloseOrder(true)}
              >
                Chiqish
              </p>
            </div>
        </div>
      </div>
    </>
  );
};
