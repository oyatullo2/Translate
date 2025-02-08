import { useContext } from "react";
import { AddNew } from "./AddNew";
import { GlobalContext } from "@/Context";

export const Header = () => {
  const { addNewMode, setAddNewMode } = useContext(GlobalContext);

  const handleAddNew = () => {
    if (addNewMode === true) {
      setAddNewMode(false);
    } else {
      setAddNewMode(true);
    }
  };
  return (
    <>
      <div className="w-full flex justify-between items-center mt-[20px]">
        <p className="text-[20px] text-[#00302E] font-[600]">Bo'limlar</p>
        <button
          onClick={handleAddNew}
          className="border-[2px] border-blue-200/60 text-[#00302E] rounded-md py-[3px] w-full max-w-[180px] font-[500]"
        >
          + Yangi qo'shish
        </button>
      </div>
      {addNewMode ? (
        <div className="absolute w-full max-w-[1080px] mt-[20px] h-[622px] rounded-t-lg border-[2px] border-blue-200/50 bg-blue-50">
          <AddNew />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
