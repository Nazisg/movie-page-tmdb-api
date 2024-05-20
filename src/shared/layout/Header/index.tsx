import SearchResults from "@/shared/components/SearchResults";
import menu from "@/shared/media/imgs/burger-menu.png";
import logo from "@/shared/media/imgs/logo-text.png";
import notification from "@/shared/media/imgs/notification.png";
import search from "@/shared/media/imgs/search.png";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <header className="py-4 flex justify-between items-center">
        <img src={logo} alt="logo" className="lg:w-44 md:w-32 w-32" />
        <div className="border-4 border-[#1F1F1F] rounded-xl py-1 px-2 lg:flex gap-2 hidden">
          <button className="text-[#BFBFBF] py-1 px-2">Home</button>
          <button className="border rounded-lg py-1 px-2 border-[#1A1A1A] bg-[#1A1A1A]">
            Movies & Shows
          </button>
          <button className="text-[#BFBFBF] py-1 px-2">Support</button>
          <button className="text-[#BFBFBF] py-1 px-2">Subscriptions</button>
        </div>
        <div className="lg:flex gap-2 items-center hidden">
          {isSearchVisible && (
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="border rounded-lg py-2 px-2 border-[#1A1A1A] bg-[#1A1A1A] text-white"
              />
            </form>
          )}
          <button onClick={toggleSearchVisibility} className="relative">
            <img src={search} alt="search" className="w-6" />
          </button>
          <img src={notification} alt="notification" className="w-6" />
        </div>
        <button
          onClick={toggleMenuVisibility}
          className="lg:hidden border border-[#262626] bg-[#1A1A1A] p-2 rounded-lg"
        >
          <img src={menu} alt="menu" className="w-6" />
        </button>
      </header>
      {searchQuery && <SearchResults searchQuery={searchQuery} />}
      <div
        className={`fixed inset-y-0 right-0 w-72 z-50 bg-[#141414] text-white transform p-4 ${
          isMenuVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleMenuVisibility}
          className="border border-[#262626] bg-[#1A1A1A] py-2 px-3 rounded-lg"
        >
          &#x2715;
        </button>
        <nav className="pt-4 flex flex-col gap-4">
          <ul className="space-y-4">
            <li>
              <button className="text-white">Home</button>
            </li>
            <li>
              <button className="text-white">Movies & Shows</button>
            </li>
            <li>
              <button className="text-white">Support</button>
            </li>
            <li>
              <button className="text-white">Subscriptions</button>
            </li>
          </ul>
          <div className="flex gap-2 items-center">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="border rounded-lg py-2 px-3 border-[#1A1A1A] bg-[#1A1A1A] text-white"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <img src={search} alt="search" className="w-6" />
              </button>
            </div>
            <img src={notification} alt="notification" className="w-6" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
