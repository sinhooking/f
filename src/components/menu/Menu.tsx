import React, { useState } from 'react';

const Menu = ({ isOpen, onClick }) => {
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;


    return (
        <button
            className="group flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-black"
            onClick={onClick}
        >
            <div
                className={`${genericHamburgerLine} ${isOpen
                        ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
            />
            <div
                className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                    }`}
            />
            <div
                className={`${genericHamburgerLine} ${isOpen
                        ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
            />
        </button>
    );
}

export default Menu;
