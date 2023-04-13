import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();

  function handleLink() {
    navigate("/shop");
  }
  return (
    <div className="flex justify-center items-center flex-col h-screen border-b">
      <img
        className="w-full h-screen "
        src="https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwbW91bnRhaW58ZW58MHx8MHx8&w=1000&q=80"
        alt="Endpoint"
      />
      <div className="w-full h-screen mt-10 absolute top-0 left-0 bg-white/1">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center mt-20 ">
          <button
            onClick={handleLink}
            className="text-md text-white rounded-md border-2 px-2 mb-1 hover:bg-white hover:text-black border-white"
          >
            SHOP
          </button>
          <p className="text-white max-[780px]:text-sm">
            Shop for the highest rated and most reliable camping tents and
            jackets
          </p>
        </div>
      </div>
    </div>
  );
}
