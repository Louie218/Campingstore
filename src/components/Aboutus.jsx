import About from "../assets/About.jpg";
import About2 from "../assets/About2.jpg";
export default function Aboutus() {
  return (
    <div
      id="aboutus"
      className="grid justify-start flex-col my-4 mx-2 h-screen"
    >
      <div className="flex ">
        <img
          className="max-[780px]:w-26 max-[780px]:h-24 w-50 h-48 border-black border-2 rounded-lg mr-6"
          src={About}
          alt="About"
        />
        <p className="text-sm">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <hr className="border-1 border-gray-400" />
      <div className="flex ">
        <img
          className="max-[780px]:w-26 max-[780px]:h-24 w-50 h-48 border-black border-2 rounded-lg mr-6"
          src={About2}
          alt="About2"
        />
        <p className="text-sm">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <hr className="border-2 border-gray-400 cursor-pointer hover:border-black duration-500" />
    </div>
  );
}
