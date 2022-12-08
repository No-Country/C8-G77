import React, { useState } from "react";

function Dropdown({ options }) {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div class="relative inline-block text-left">
      <div>
        <button
          onClick={handleClick}
          type="button"
          class="inline-flex w-full justify-center rounded-md  bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 hover:text-white hover:outline-none hover:ring-2 hover:ring-pink-500 hover:ring-offset-2 hover:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Genres
        </button>
      </div>

      {showOptions && (
        <div
          class="absolute left-0 z-10 mt-2 w-64 xl:w-72 2xl:w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-2 grid grid-cols-2 gap-4" role="none">
            {options.map((item) => (
              <a
                href="#"
                class="text-gray-900  inline-block px-4 rounded py-2 text-sm hover:bg-indigo-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
