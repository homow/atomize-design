function Header () {
    return (
        <header className={"container py-4 text-primary-gray font-medium text-sm"}>
            {/* <=== header logo ===> */}
            <div>
                <a href="/">
                    <svg className={"w-25 h-5"}>
                        <use href={"#header-logo"}></use>
                    </svg>
                </a>
            </div>

            {/* <=== navigation header ===> */}
            <nav>
                <ul className={"*:hover:text-"}>
                    <li>
                        <svg className={"size-6"}>
                            <use href={"#moon-icon"}></use>
                        </svg>
                    </li>
                    <li>
                        <a href="">Feature</a>
                    </li>
                    <li>
                        <a href="">GitHub</a>
                    </li>
                    <li>
                        <a href="">For Designers</a>
                    </li>
                    <li>
                        <a href="">Documentation</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header