import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
export const Login = () => {
  // State to store form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [type, setType] = useState("password");
  const navigate = useNavigate();

  // Function to handle form submission
  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "admin") {
      localStorage.setItem("token", "true");
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };
  const handleShowPassword = () => {
    if (type === "password") {
      setShow(true);
      setType("text");
    } else {
      setShow(false);
      setType("password");
    }
  };

  const handleEnterButton = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // Codes for the login form
  return (
    <>
      <div className="w-full h-screen flex justify-center px-[10px] items-center">
        <div className="w-full flex py-[30px] px-[5px] flex-col justify-center items-center rounded-lg shadow-md max-w-[400px] border-[2px] bg-blue-100/10 border-blue-100/50">
          <p className="text-[#00302E] text-center mb-[40px] font-[600] text-[19px]">
            Welcome to admin panel !
          </p>
          <div className="flex w-full mb-[40px] flex-col items-center gap-5">
            <div className="w-full relative max-w-[340px] flex justify-center items-center">
              <input
                type="text"
                {...register("username", {
                  required: "Username",
                  minLength: 3,
                })}
                name="username"
                onKeyDown={handleEnterButton}
                placeholder="Enter your username"
                className={classNames(
                  "border-blue-100/80 transition-all duration-500 ease-in-out pr-[30px] w-full border-[2px]  py-[5px] px-[10px] rounded-md outline-none text-[#00302E] font-[500]",
                  {
                    "border-red-500": errors.username,
                  }
                )}
              />
              <i className="fa fa-user absolute right-[10px] top-[10px] text-[#00302E]"></i>
            </div>
            <div className="w-full relative max-w-[340px] flex justify-center items-center">
              <input
                type={type}
                {...register("password", {
                  required: "Password",
                  minLength: 4,
                })}
                name="password"
                onKeyDown={handleEnterButton}
                placeholder="Enter your password"
                className={classNames(
                  "border-blue-100/80 transition-all duration-500 ease-in-out pr-[30px] w-full border-[2px]  py-[5px] px-[10px] rounded-md outline-none text-[#00302E] font-[500]",
                  {
                    "border-red-500": errors.password,
                  }
                )}
              />
              {show ? (
                <i
                  onClick={handleShowPassword}
                  className="fa fa-lock absolute right-[10px] top-[10px] text-[#00302E]"
                ></i>
              ) : (
                <i
                  onClick={handleShowPassword}
                  className="fa fa-unlock absolute right-[10px] top-[10px] text-[#00302E]"
                ></i>
              )}
            </div>
          </div>
          <button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className="border-blue-100/80 max-w-[340px] hover:bg-blue-100/20 active:shadow-inner transition-all duration-500 ease-in-out w-full border-[2px] py-[5px] rounded-md outline-none text-[#00302E] font-[500]"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
