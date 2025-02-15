import stupid from "../assets/stupid.png";

export const Navbar = () => {
  return (
    <div className="navbar bg-cyan-800 overflow-hidden ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Our books</a>
              <ul className="p-2">
                <li>
                  <a>Ling Ming</a>
                </li>
                <li>
                  <a>Other</a>
                </li>
              </ul>
            </li>
            <li>
              <a>About author</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className=" w-auto h-10 rounded-full" src={stupid} alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-white font-semibold">About us</a>
          </li>
          <li>
            <details>
              <summary className="text-white font-semibold">Our books</summary>
              <ul className="p-2">
                <li>
                  <a>Ling Ming</a>
                </li>
                <li>
                  <a>Other</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="text-white font-semibold">About author</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact us</a>
      </div>
    </div>
  );
};
