import React from "react";
import Button from "../component/Button";
import { useAuth } from "../hooks/UserContext";
import { Link } from "react-router-dom";
function Navbar() {
  const {user , logout} = useAuth()
  return (
    <header>
      <nav className="flex items-center justify-between p-2  sm:m-2">
        {/* Logo / Cart */}
        <div
          className="
            text-[rgb(var(--color-secondary))]
            min-w-18
            cursor-pointer
            ring-1 ring-[rgb(var(--color-primary))]
            shadow-xl
            p-2  rounded-md
          ">
          My Cart
        </div>

        {/* Search bar */}
        <form
          className="
            hidden sm:flex items-center sm:w-1/2
            text-[rgb(var(--color-text))]
            ring-1 ring-[rgb(var(--color-primary))]
            shadow-xl
            p-2 rounded-md
          ">
          <input
            type="search"
            aria-label="Search products"
            placeholder="Search products..."
            className="focus:outline-none mr-3 bg-transparent w-full"
          />
          <button type="submit" aria-label="Search">
            <svg
              className="h-6 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>

        {/* Actions */}
        <div className="flex items-center">
          {/* Cart Icon */}
          <Link to={'/cart'} >
          <button
            aria-label="Cart"
            className="
              text-[rgb(var(--color-text))]
              hover:drop-shadow-lg
              hover:scale-105
              active:scale-95
              cursor-pointer 
              ring-1 ring-[rgb(var(--color-primary))]
              transition-all duration-150
              shadow-xl
              p-2 m-1 rounded-md
            ">
            <svg className="h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.50014 17H17.3294C18.2793 17 18.7543 17 19.1414 16.8284C19.4827 16.6771 19.7748 16.4333 19.9847 16.1246C20.2228 15.7744 20.3078 15.3071 20.4777 14.3724L21.8285 6.94311C21.8874 6.61918 21.9169 6.45721 21.8714 6.33074C21.8315 6.21979 21.7536 6.12651 21.6516 6.06739C21.5353 6 21.3707 6 21.0414 6H5.00014M2 2H3.3164C3.55909 2 3.68044 2 3.77858 2.04433C3.86507 2.0834 3.93867 2.14628 3.99075 2.22563C4.04984 2.31565 4.06876 2.43551 4.10662 2.67523L6.89338 20.3248C6.93124 20.5645 6.95016 20.6843 7.00925 20.7744C7.06133 20.8537 7.13493 20.9166 7.22142 20.9557C7.31956 21 7.44091 21 7.6836 21H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button></Link>
          {/* User Icon */}

          {
            user?(
              <>
              <button
            aria-label="Account"
            className="
              text-[rgb(var(--color-text))]
              hover:drop-shadow-lg
              hover:scale-105
              active:scale-95
              ring-1 ring-[rgb(var(--color-primary))]
              transition-all duration-150
              shadow-xl
              p-2 m-1 rounded-md
            ">
            <svg
              className="h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
              </button>
              <Button text="Logout" onClick={logout} />
              </>
            ) :(
              <Link to={'/login'}>
              <Button  text="Login" /> 
              </Link>
            )
          }
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
