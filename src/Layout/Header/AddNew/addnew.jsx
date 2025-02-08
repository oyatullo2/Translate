import { useState } from "react";
export const AddNew = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };
  return (
    <>
      <div className="w-full flex h-screen max-h-[620px] justify-center items-center">
        <div className="flex flex-col w-full items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Enter section name"
            className="border-blue-100/80 transition-all max-w-[350px] bg-white duration-500 ease-in-out w-full border-[2px]  py-[5px] px-[10px] rounded-md outline-none text-[#00302E] font-[500]"
          />
          <div className="flex flex-row-reverse w-full justify-between max-w-[350px] items-center">
            <label
              htmlFor="fileUpload"
              className="cursor-pointer hover:bg-blue-200 text-[#00302E] outline-none font-medium py-2 px-4 border-[2px] border-blue-100 rounded-md transition duration-300"
            >
              Choose Image
            </label>
            <input
              id="fileUpload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <p className="w-[200px] line-clamp-1 text-gray-800">
              {fileName ? fileName : "No image chosen"}
            </p>
          </div>
          <button className="border-[2px] border-blue-100/80 transition-all max-w-[350px] bg-white duration-500 ease-in-out w-full py-[5px] px-[10px] rounded-md outline-none text-[#00302E] font-[500]">
            Save
          </button>
        </div>
      </div>
    </>
  );
};
