import {Component} from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light"
        };
    }

    componentDidMount() {
        const savedTheme = localStorage.getItem("theme") || "light";
        this.setState({theme: savedTheme});
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }

    toggleTheme = () => {
        const newTheme = this.state.theme === "light" ? "dark" : "light";
        this.setState({theme: newTheme});
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    render() {
        const {theme} = this.state;

        return (
            <header id={"header"} className={"fixed z-20 right-0 left-0 top-0 py-4 bg-primary-bg text-primary-gray font-medium text-sm"}>
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
                    <nav className={"flex flex-row items-center gap-5 md:gap-8"}>
                        {/* <=== theme toggle button ===> */}
                        <div id={"theme-toggle"} className={"max-w-max"} onClick={this.toggleTheme}>
                            <svg className={"size-6 cursor-pointer stroke-primary-base fill-primary-base"}>
                                <use href={theme === "dark" ? "#sun-icon" : "#moon-icon"}></use>
                            </svg>
                        </div>

                        {/* <=== menu toggle button ===> */}
                        <input type="checkbox" id={"menu-toggle"} className={"hidden peer"}/>
                        <label htmlFor={"menu-toggle"} className={"md:hidden size-5 cursor-pointer relative peer-checked:-translate-0.5 transition-all duration-600 *:absolute *:bg-primary-base *:w-full *:block *:transition-all *:duration-600 peer-checked:[&>span:nth-child(1)]:rotate-135 peer-checked:[&>span:nth-child(1)]:top-[60%] peer-checked:[&>span:nth-child(1)]:left-0 peer-checked:[&>span:nth-child(2)]:rotate-45"}>
                            <span className={"h-[2px] top-3/10"}></span>
                            <span className={"h-[2px] bottom-3/10"}></span>
                        </label>

                        {/* <=== navigation menu ===> */}
                        <ul className={"bg-primary-bg max-md:nav-menu-mobile md:flex md:flex-row md:items-center md:gap-8 lg:gap-10"}>
                            <li>
                                <a className={"hover:text-primary-text transition-all"} href={"#feature"}>Feature</a>
                            </li>
                            <li>
                                <a target="_blank" className={"hover:text-primary-text transition-all"} href="https://github.com/homow">GitHub</a>
                            </li>
                            <li>
                                <a target="_blank" className={"hover:text-primary-text transition-all"} href="https://www.youtube.com/@homow_dev">For Designers</a>
                            </li>
                            <li className={"text-center"}>
                                <a target="_blank" className={"transition-all mt-4 md:mt-0 px-8 py-2 rounded-lg inline-block text-gray-900 bg-gray-200 hover:bg-gray-300 w-full"} href="https://homow.ir">Documentation</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;