import { useState } from "react";
import Login from "../component/Login";
import Signup from "../component/Signup";

function Loginpage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className=" my-14  flex items-center justify-center px-4">
      <div
        className="
          w-full
          max-w-md
          rounded-lg
          shadow-lg
          ring-1 ring-[rgb(var(--color-primary))]
          bg-white
          
        "
      >
        {/* Top Toggle Buttons */}
        <div className="flex">
          <button
            onClick={() => setIsLogin(true)}
            className={`
              flex-1 py-3 text-sm sm:text-base font-medium
              border-b-2 transition-all duration-200
              ${isLogin
                ? "border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]"
                : "border-transparent text-gray-500"}
            `}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`
              flex-1 py-3 text-sm sm:text-base font-medium
              border-b-2 transition-all duration-200
              ${!isLogin
                ? "border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]"
                : "border-transparent text-gray-500"}
            `}
          >
            Signup
          </button>
        </div>

        {/* Form Content */}
        <div className="p-4 sm:p-6">
          {isLogin ? <Login /> : <Signup />}
        </div>

        {/* Bottom Toggle Text */}
        <p className="text-center text-xs sm:text-sm pb-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-500 underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Loginpage;
