import { Link, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
export const Sidebar = () => {
  const local = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => local.pathname === path;

  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

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
              ></i>
              <p
                style={{ color: isActive("/words") ? "black" : "#BCBCBC" }}
                className="relative w-full transition-all duration-150 ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
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
                className=" transition-all duration-150 ease-in-out fa-solid fa-user text-[#BCBCBC] text-[20px]"
              ></i>
              <p
                style={{ color: isActive("/addAdmin") ? "black" : "#BCBCBC" }}
                className=" transition-all w-full duration-150 relative ease-in-out text-[#BCBCBC] font-[500] text-[17px]"
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
            <Dialog>
              <DialogTrigger
                className="font-[500] "
                style={{ color: isActive("/cart") ? "black" : "#BCBCBC" }}
              >
                Chiqish
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex flex-col gap-5 text-center w-full justify-center">
                    <p className="text-center">
                      Haqiqatdan chiqishni tasdiqlaysizmi?
                    </p>
                    <div className="w-full items-center flex mx-auto justify-between max-w-[280px]">
                      <p
                        onClick={LogOut}
                        className="text-red-500 cursor-pointer border-red-500 border-[2px] py-[5px] w-full max-w-[120px] rounded-md"
                      >
                        Tasdiqlash
                      </p>
                      <DialogClose className=" w-full max-w-[120px]">
                        <p className="text-green-400 border-green-400 cursor-pointer border-[2px] py-[5px] w-full max-w-[120px] rounded-md">
                          Bekor qilish
                        </p>
                      </DialogClose>
                    </div>
                  </DialogTitle>
                  <DialogDescription className="flex gap-5 items-center"></DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};
