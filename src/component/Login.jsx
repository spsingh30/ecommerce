import { useState } from "react";
import Button from "./Button";
import { useAuth } from "../hooks/UserContext";

function Login() {
  const [form, setForm] = useState({
  email: "",
  password: "",
  role: "",
});

  const { email, password, role } = form;
  const [showPassword, setShowPassword] = useState(false);


  //  login context
  const {login} = useAuth() ;

  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  function handleSubmit(e) {
    e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("registeredUser"))

  if (!storedUser) {
    alert("please sign up");
    return;
  }

  if (
    storedUser.email !== email ||
    storedUser.password !== password
  ) {
    alert("Email and password are wrong");
    return;
  }

    login(storedUser);
    alert(`Signup successful as ${storedUser.role}`);
  }


  return (
    <div className=" flex items-center justify-center p-1">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-sm
          sm:max-w-md
          
          p-4
          rounded-md
          flex flex-col
          gap-2
        "
      >
        {/* Email */}
        <label htmlFor="email" className="text-sm">
          Email
        </label>

        <div className="flex items-center gap-2 p-2 ring-1 ring-[rgb(var(--color-primary))] rounded-md">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="xyz@email.com"
            className="flex-1 w-full focus:outline-none bg-transparent"
            value={email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <label htmlFor="password" className="text-sm">
          Password
        </label>

        <div className="flex items-center gap-2 p-2 ring-1 ring-[rgb(var(--color-primary))] rounded-md">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="flex-1 w-full focus:outline-none bg-transparent"
            value={password}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="relative w-6 h-6 shrink-0"
          >
            <svg
              className="absolute  inset-0 w-full h-full"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 12c0-2.25 3.75-7.5 10.5-7.5S22.5 9.75 22.5 12s-3.75 7.5-10.5 7.5S1.5 14.25 1.5 12zM12 16.75a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zM14.7 12a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Button */}
        <Button
          w="w-full"
          type="submit"
          text="Login"
        />
      </form>
    </div>
  );
}

export default Login;
