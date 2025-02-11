import { useState } from "react";

export const AddAdmin = () => {
  const [showPasswords, setShowPasswords] = useState(
    Array(100).fill("password")
  );

  const handleShow = (index) => {
    setShowPasswords((prev) => {
      const newShow = [...prev];
      newShow[index] = newShow[index] === "password" ? "text" : "password";
      return newShow;
    });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center p-5">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg h-[621px] overflow-y-scroll relative">
        <table className="w-full border border-gray-300 text-left">
          <thead className="sticky top-0 bg-blue-500 text-white z-10">
            <tr>
              <th className="py-3 px-5 border border-gray-300">Name</th>
              <th className="py-3 px-5 border border-gray-300">Username</th>
              <th className="py-3 px-5 border border-gray-300">Password</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 50 }).map((_, index) => (
              <tr key={index} className="hover:bg-gray-100 relative">
                <td className="py-3 px-5 border border-gray-300">John</td>
                <td className="py-3 px-5 border border-gray-300">John123</td>
                <td className="py-3 px-5 border border-gray-300">
                  {showPasswords[index] === "password" ? "********" : "John123"}
                </td>
                <p
                  onClick={() => handleShow(index)}
                  className="absolute cursor-pointer border-none right-12 top-3"
                >
                  {showPasswords[index] === "password" ? "👁️" : "👁️‍🗨️"}
                </p>
                <p className="absolute cursor-pointer border-none right-2 top-3">
                  🗑️
                </p>
              </tr>
            ))}
            {Array.from({ length: 50 }).map((_, index) => (
              <tr key={index + 50} className="hover:bg-gray-100 relative">
                <td className="py-3 px-5 border border-gray-300">Alice</td>
                <td className="py-3 px-5 border border-gray-300">Alice456</td>
                <td className="py-3 px-5 border border-gray-300">
                  {showPasswords[index + 50] === "password"
                    ? "********"
                    : "Alice456"}
                </td>
                <p
                  onClick={() => handleShow(index + 50)}
                  className="absolute cursor-pointer border-none right-12 top-3"
                >
                  {showPasswords[index + 50] === "password" ? "👁️" : "👁️‍🗨️"}
                </p>
                <p className="absolute cursor-pointer border-none right-2 top-3">
                  🗑️
                </p>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
