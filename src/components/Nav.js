import logo from "../img/buma-logo-white.png";

const Nav = () => {
  return (
    // NAV CONTAINER
    <div className="bg-transparent flex justify-between items-center mt-6 pl-20 fixed w-screen z-10 ">
      {/*  LOGO */}
      <img src={logo} className="w-40" alt="" />

      {/* LINKS  */}
      <ul className="text-white flex pr-20 uppercase items-center align-middle ">
        <li className="p-1 mr-4 cursor-pointer border-b-2 border-b-blue-700">
          Home
        </li>
        <li className="p-1 mr-4 cursor-pointer">Projects</li>
        <li className="p-1 mr-4 cursor-pointer">About Us</li>
        <li className="p-1 mr-4 cursor-pointer">Contact</li>
        <li className="p-1  mr-4 cursor-pointer bg-blue-800 rounded-md">
          BESTILL GRATIS BEFARING
        </li>
      </ul>
    </div>
  );
};

export default Nav;
