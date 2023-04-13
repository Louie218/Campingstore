export default function Contact() {
  return (
    <div id="contact">
      <h1 className="text-center font-bold">Contact Me</h1>
      <div className="flex h-80 justify-center ">
        <form className="flex flex-col" action="submit">
          <input
            className="border-2 rounded-md w-80 border-black pl-2 hover:border-gray-400"
            type="text"
            name="Fullname"
            id="fullName"
            placeholder="Please enter full name"
          />
          <input
            className="border-2 rounded-md border-black pl-2 hover:border-gray-400"
            type="email"
            name="Fullname"
            id="fullName"
            placeholder="E-mail"
          />
          <input
            className=" h-48 border-2 rounded-md border-black pl-2 hover:border-gray-400"
            type="text"
            name="textBox"
            id="textBox"
            placeholder="Enter Message...."
          />
          <button
            className="text-md hover:text-black hover:bg-white rounded-md border-2 px-2 mb-1 bg-black text-white border-black "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
