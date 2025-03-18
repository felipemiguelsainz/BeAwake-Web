import { FaArrowDown } from "react-icons/fa6";

export default function HomePage() {
  const handleScroll = () => {
    const section = document.getElementById("contact");
    if (section) {
      window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="background-img w-full">
        <div className="container-home flex items-center sm:pl-28">
          <div className="flex flex-wrap justify-center sm:justify-start">
            <span className="text-white font-bold md:font-medium text-center sm:text-start helvetica text-lg sm:text-3xl lg:text-5xl w-full">
              Harnessing AI to create game-changing
              <br />
              solutions for a smarter future
            </span>
            <button
              className="text-white light-blue maven-pro font-bold p-4 text-sm md:text-base rounded-3xl mt-5 flex items-center cursor-pointer"
              onClick={handleScroll}
            >
              <FaArrowDown className="mr-3" />CONTACT US
            </button>
          </div>
        </div>
      </div>
      <div className="light-blue-line-homepage"></div>
    </div>
  );
}
