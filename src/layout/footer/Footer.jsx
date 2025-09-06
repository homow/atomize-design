import {Component} from "react";
import LinksList from "@/layout/footer/links-list/LinksList.jsx";
import FooterSocial from "@/layout/footer/footer-social/FooterSocial.jsx";

class Footer extends Component {
    render () {
        const array = [
            {
                title: "Docs",
                links: [
                    {
                        text: "Installation",
                        href: "https://homow.ir"
                    },
                    {
                        text: "Theme Setup",
                        href: "https://github.com/homow/"
                    },
                    {
                        text: "Grid",
                        href: "https://youtube.com/@homow_dev"
                    },
                    {
                        text: "Atoms",
                        href: "https://github.com/homow/"
                    },
                ]
            },
            {
                title: "Atomize",
                links: [
                    {
                        text: "Feature",
                        href: "https://homow.ir"
                    },
                    {
                        text: "Development",
                        href: "https://youtube.com/@homow_dev"
                    },
                    {
                        text: "Design",
                        href: "https://github.com/homow/"
                    },
                ]
            },
            {
                title: "Resources",
                links: [
                    {
                        text: "Sketch File",
                        href: "https://homow.ir"
                    },
                    {
                        text: "Github",
                        href: "https://github.com/homow/"
                    }
                ]
            },
            {
                title: "Extras",
                links: [
                    {
                        text: "Blog",
                        href: "https://homow.ir"
                    },
                    {
                        text: "Need Help",
                        href: "https://github.com/homow/"
                    },
                    {
                        text: "Give Feedback",
                        href: "https://github.com/homow/"
                    }
                ]
            },
            {
                title: "About",
                links: [
                    {
                        text: "Showcase",
                        href: "https://homow.ir"
                    },
                    {
                        text: "Contribute",
                        href: "https://youtube.com/@homow_dev"
                    }
                ]
            },
        ];

        const list = array.map((l, i) => <LinksList key={i} arrayLinks={l}/>);

        return (
            <footer id={"footer"} className={"container pb-6"}>
                <div className={"hidden sm:grid sm:grid-cols-5 gap-y-8 gap-x-8 grid-cols-[repeat(3,auto)] justify-between"}>
                    {list}
                </div>

                <div className={"text-sm font-medium text-center mt-6"}>
                    {/* <=== footer copyright ===> */}
                    <div className={"mb-5 flex flex-col gap-3 justify-center items-center *:hover:text-blue-500 *:transition-all"}>
                        <a href={"https://homow.ir"} target={"_blank"}>
                            Recrafted by Homow
                        </a>

                        <a href={"https://atomizecode.com/"} target={"_blank"}>
                            Designed & Developed by Proksh Luthra
                        </a>
                    </div>
                    {/* <=== footer social media ===> */}
                    <div className={"flex flex-row gap-2 justify-center items-center"}>
                        <FooterSocial link={"https://github.com/homow/"} icon={
                            <svg className={"size-7"}>
                                <use href="#github-icon"></use>
                            </svg>
                        }/>
                        <FooterSocial link={"https://youtube.com/@homow_dev"} icon={
                            <svg className={"size-7"}>
                                <use href="#youtube-icon"></use>
                            </svg>
                        }/>
                        <FooterSocial link={"https://homow.ir"} icon={
                            <svg className={"size-7"}>
                                <use href="#website-icon"></use>
                            </svg>
                        }/>
                        <FooterSocial link={"https://t.me/homow_dev"} icon={
                            <svg className={"size-7"}>
                                <use href="#telegram-icon"></use>
                            </svg>
                        }/>
                        <FooterSocial link={"https://www.instagram.com/homow_devw"} icon={
                            <svg className={"size-7"}>
                                <use href="#instagram-icon"></use>
                            </svg>
                        }/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer