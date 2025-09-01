import {useEffect, useState} from "react";

function Header() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <header className={"py-4 text-primary-gray font-medium text-sm relative"}>
            <div className={"container flex items-center justify-between"}>
                {/* <=== header logo ===> */}
                <div>
                    <a href="/">
                        <svg className={"w-25 h-5 stroke-primary-base fill-primary-base"}>
                            <use href={"#header-logo"}></use>
                        </svg>
                    </a>
                </div>

                {/* <=== navigation header ===> */}
                <nav className={"flex flex-row items-center gap-4"}>

                    {/* <=== theme toggle button ===> */}
                    <div id={"theme-toggle"} className={"max-w-max"} onClick={toggleTheme}>
                        <svg className={"size-6 cursor-pointer stroke-primary-base fill-primary-base"}>
                            <use href={theme === "dark" ? "#sun-icon" : "#moon-icon"}></use>
                        </svg>
                    </div>

                    <input type="checkbox" id={"menu-toggle"} className={"opacity-0 invisible inset-0 absolute peer"}/>
                    {/* <=== menu toggle button ===> */}
                    <label htmlFor={"menu-toggle"} className={"size-5 cursor-pointer relative peer-checked:-translate-0.5 transition-all duration-600 *:absolute *:bg-primary-base *:h-0.5 *:w-full *:block *:transition-all *:duration-600 peer-checked:[&>span:nth-child(1)]:rotate-135 peer-checked:[&>span:nth-child(1)]:top-[60%] peer-checked:[&>span:nth-child(1)]:left-0 peer-checked:[&>span:nth-child(2)]:rotate-45"}>
                        {/* <=== border of menu toggle button ===> */}
                        <span className={"top-3/10"}></span>
                        <span className={"bottom-3/10"}></span>
                    </label>

                    {/* <=== navigation menu ===> */}
                    <ul className={"nav-menu-mobile"}>
                        <li><a className={"hover:text-primary-text transition-all"} href="">Feature</a></li>
                        <li><a className={"hover:text-primary-text transition-all"} href="">GitHub</a></li>
                        <li><a className={"hover:text-primary-text transition-all"} href="">For Designers</a></li>
                        <li className={"text-center"}>
                            <a className={"transition-all px-8 py-2 rounded-lg inline-block text-gray-900 bg-gray-lt hover:bg-gray-hover"} href="">Documentation</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header