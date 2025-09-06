import {Component} from "react";
import LinksList from "@/layout/footer/links-list/LinksList.jsx";

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
                    {
                        text: "Molecules",
                        href: "https://youtube.com/@homow_dev"
                    },
                    {
                        text: "Functions",
                        href: "https://homow.ir"
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
            <footer className={"container"}>
                <div className={"grid gap-y-8 grid-cols-[repeat(2,auto)] justify-between"}>
                    {list}
                </div>
            </footer>
        )
    }
}

export default Footer