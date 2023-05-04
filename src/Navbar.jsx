import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center font-bold text-lg h-16">
      <h1 className="text-2xl pl-10">The Quiz </h1>
      <ul className="flex gap-10 mr-10 cursor-pointer">
        <li className="hover:text-sky-700">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-400 hover:text-green-700"
                : "text-black hover:text-green-700"
            }
            to="/"
          >
            Take the quiz
          </NavLink>
        </li>
        <li className="hover:text-green-700">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-700 hover:text-green-700"
                : "text-black hover:text-green-700"
            }
            to="/Admin"
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
