export default function Footer() {
  return (
    <div className="h-10 text-center font-semibold">
      <h4>Copyright Golden View 2030</h4>
      <ul className="flex justify-center  ">
        <li
          onClick={() =>
            window.location.replace(
              "https://www.linkedin.com/in/luis-leon-2a18a7230/"
            )
          }
          className="mx-4  hover:text-gray-400"
        >
          Linkedin
        </li>
        <li
          onClick={() => window.location.replace("https://github.com/Louie218")}
          className="mx-4  hover:text-gray-400 cursor-pointer"
        >
          Github
        </li>
        <li
          onClick={() =>
            window.location.replace("https://luisaleon.netlify.app/")
          }
          className="mx-4  hover:text-gray-400 cursor-pointer"
        >
          Portfolio
        </li>
      </ul>
    </div>
  );
}
