import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Dropdown() {
  const [selected, setSelected] = useState("All");

  const options = [
    "All",
    "All the departments",
    "Arts and crafts",
    "Automotive",
    "Baby",
    "Beauty and personal Care",
    "Cinema and Tv",
    "Computers",
    "Sports and outdoor activities",
    "Electronics",
    "Home and Kitchen",
  ];

  return (
    <Menu as="div" className="relative inline-block text-left z-30">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-[10px] text-sm font-medium text-black bg-gray-200 rounded-l-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {selected}
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {options.map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-yellow-400 text-black" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => setSelected(option)}
                  >
                    {option}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
