import { useState } from "react";
import PropTypes from "prop-types";
import { BiChevronDown } from "react-icons/bi";

const SingleDropdown = ({ options, defaultOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-4 py-2 text-white bg-transparent border-2 border-white rounded-md hover:text-Black focus:outline-none"
      >
        <h6>{selectedOption || defaultOption}</h6>
        <BiChevronDown className="w-5 h-5 ml-5" />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full py-2 mt-1 border-white border-2 overflow-auto bg-gray-500 rounded-md shadow-lg max-h-56">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-300 hover:text-black"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SingleDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultOption: PropTypes.string.isRequired,
};

export default SingleDropdown;
