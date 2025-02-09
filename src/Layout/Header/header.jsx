import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [fileName, setFileName] = useState("");
  const location = useLocation();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  if (location.pathname === "/home") {
    return (
      <>
        <div className="w-full flex justify-between items-center mt-[20px]">
          <p className="text-[20px] text-[#00302E] font-[600]">Bo'limlar</p>
          <Dialog>
            <DialogTrigger className="border-[2px] border-blue-200 py-[3px] w-full max-w-[150px] text-[#00302E] font-[500] flex justify-center items-center rounded-md">
              + Yangi qo'shish
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <input
                    className="w-full border-[2px] border-blue-200 outline-none max-w-[250px] py-[3px] rounded-md px-[10px]"
                    type="text"
                    placeholder="Enter section name"
                  />
                </DialogTitle>
                <DialogDescription className="flex pb-[20px] gap-5 items-center">
                  <label
                    htmlFor="file"
                    className="border-[2px]  border-blue-200 py-[3px] w-full max-w-[150px] text-[#00302E] font-[500] flex justify-center items-center rounded-md"
                  >
                    <input
                      type="file"
                      className="hidden"
                      id="file"
                      onChange={handleFileChange}
                    />
                    <span>Choose file</span>
                  </label>
                  <span className="text-[#00302E] line-clamp-1 max-w-[250px]">
                    {fileName ? fileName : "Choose file"}
                  </span>
                </DialogDescription>
                <button className="border-[2px] border-blue-200 py-[3px] w-full text-[#00302E] font-[500] flex justify-center items-center rounded-md">
                  Save
                </button>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </>
    );
  }

  if (location.pathname === "/words") {
    return (
      <>
        <div className="w-full flex justify-between items-center mt-[20px]">
          <p className="text-[20px] text-[#00302E] font-[600]">So'zlar</p>
          <Dialog>
            <DialogTrigger className="border-[2px] border-blue-200 py-[3px] w-full max-w-[150px] text-[#00302E] font-[500] flex justify-center items-center rounded-md">
              + Yangi qo'shish
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <input
                    className="w-full border-[2px] border-blue-200 outline-none max-w-[250px] py-[3px] rounded-md px-[10px]"
                    type="text"
                    placeholder="Enter text name"
                  />
                </DialogTitle>
                <DialogDescription className="flex gap-5 items-center">
                  <label
                    htmlFor="file"
                    className="border-[2px]  border-blue-200 py-[3px] w-full max-w-[150px] text-[#00302E] font-[500] flex justify-center items-center rounded-md"
                  >
                    <input
                      type="file"
                      className="hidden"
                      id="file"
                      onChange={handleFileChange}
                    />
                    <span>Choose file</span>
                  </label>
                  <span className="text-[#00302E] line-clamp-1 max-w-[250px]">
                    {fileName ? fileName : "Choose file"}
                  </span>
                </DialogDescription>
                <textarea
                  placeholder="Enter text"
                  className="border-[2px] border-blue-200 outline-none resize-none h-[150px] p-[5px] rounded-md text-[#00302E] font-[500]"
                ></textarea>
                <button className="border-[2px] border-blue-200 py-[3px] w-full text-[#00302E] font-[500] flex justify-center items-center rounded-md">
                  Save
                </button>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </>
    );
  }

  if (location.pathname === "/addAdmin") {
    return (
      <>
        <div className="w-full flex justify-between items-center mt-[20px]">
          <p className="text-[20px] text-[#00302E] font-[600]">Admin qo'shish</p>
          <Dialog>
            <DialogTrigger className="border-[2px] border-blue-200 py-[3px] w-full max-w-[150px] text-[#00302E] font-[500] flex justify-center items-center rounded-md">
              + Yangi qo'shish
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex flex-col gap-3">
                  <input
                    className="w-full border-[2px] border-blue-200 outline-none max-w-[250px] py-[3px] rounded-md px-[10px]"
                    type="text"
                    placeholder="Enter new admin name"
                  />
                  <input
                    className="w-full border-[2px] border-blue-200 outline-none max-w-[250px] py-[3px] rounded-md px-[10px]"
                    type="text"
                    placeholder="Enter new admin username"
                  />
                  <input
                    className="w-full border-[2px] border-blue-200 outline-none max-w-[250px] py-[3px] rounded-md px-[10px]"
                    type="password"
                    placeholder="Enter new admin password"
                  />
                </DialogTitle>
                <DialogDescription className="flex gap-5 items-center">
                 
                </DialogDescription>
                <button className="border-[2px] border-blue-200 py-[3px] w-full text-[#00302E] font-[500] flex justify-center items-center rounded-md">
                  Save
                </button>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full flex justify-between items-center mt-[20px]">
        <p className="text-[20px] text-[#00302E] font-[600]">
          Kichik Bo'limlar
        </p>
      </div>
    </>
  );
};
