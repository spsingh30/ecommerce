import React, { useState } from "react";
import Button from "./Button";

function Signup() {
  const [form, setForm] = useState({
    name:"",
    email: "",
    password: "",
    role: "",
  });

  const {name, email, password, role } = form;
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!role) {
    alert("Please select a role");
    return;
  }
    const userData = { name, email, password, role };
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    alert(`Signup successful as ${role}`);
  }

  return (
    
      <div className=" flex items-center overflow-hidden justify-center p-1">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-sm
          sm:max-w-md
          p-4
          rounded-md
          flex flex-col
          gap-3
        "
      >
        {/* Role Buttons */}
        <label className="text-sm">Select Role</label>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() =>
              setForm((prev) => ({ ...prev, role: "user" }))
            }
            className={`flex-1 p-2  rounded-md ring-1 ring-[rgb(var(--color-primary))]
              ${role === "user"
                ? "bg-[rgb(var(--color-primary))]  text-white"
                : "bg-transparent"
              }`}
          >
            User
          </button>

          <button
            type="button"
            onClick={() =>
              setForm((prev) => ({ ...prev, role: "seller" }))
            }
            className={`flex-1 p-2 w-full rounded-md ring-1 ring-[rgb(var(--color-primary))]
              ${role === "seller"
                ? "bg-[rgb(var(--color-primary))] text-white"
                : "bg-transparent"
              }`}
          >
            Seller
          </button>
        </div>



        {/* name */}
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <div className="flex items-center gap-2 p-2 ring-1 ring-[rgb(var(--color-primary))] rounded-md">
          <input
            id="name"
            type="name"
            name="name"
            placeholder="username"
            className="flex-1 w-full bg-transparent focus:outline-none"
            value={name}
            onChange={handleChange}
          />
        </div>

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
            className="flex-1 w-full bg-transparent focus:outline-none"
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

        {/* Submit */}
        <Button w="w-full" type="submit" text="Sign Up" />
      </form>
    </div>
    
  );
}

export default Signup;
