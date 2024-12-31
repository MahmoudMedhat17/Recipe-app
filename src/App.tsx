import Pages from "./pages/Pages";
import { FaCircleArrowUp } from "react-icons/fa6";
import { ScrollToTop } from "./lib/ScrollToTop";

const App = () => {
  return (
    <div className="xl:px-52">
      <Pages />
      <button onClick={ScrollToTop}>
        <FaCircleArrowUp className="fixed text-gray-700/80 hover:text-orange-500 duration-200 cursor-pointer bottom-4 right-8 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14" />{" "}
      </button>
    </div>
  );
};

export default App;
