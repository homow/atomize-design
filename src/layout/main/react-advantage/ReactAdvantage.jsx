import {Component} from 'react';
import AdvantageReactIcon from "@/layout/main/react-advantage/advantage-react-icon/AdvantageReactIcon.jsx";
import ReactAdvantageCircleBorder from "@/layout/main/react-advantage/react-advantage-circle-border/ReactAdvantageCircleBorder.jsx";

class ReactAdvantage extends Component {
    render() {
        return (
            <section className={"pt-20"}>
                <div className={"container space-y-12 lg:space-y-0 lg:flex gap-2 justify-between items-start"}>
                    {/* <=== circle borders box ===> */}
                    <ReactAdvantageCircleBorder/>

                    {/* <=== react advantage info and icons ===> */}
                    <div className={"lg:basis-2/4"}>
                        {/* <=== info ===> */}
                        <h2 className={"font-bold text-3xl tracking-wider leading-10 md:text-4xl"}>
                            Elegant & consistent UI, powered by <span className={"text-cyan-400"}>React</span>.
                        </h2>

                        {/* <=== advantage react icon, title and text ===> */}
                        <div className={"container mt-8 max-xx:space-y-6 xx:grid xx:grid-cols-2 xx:gap-x-3 xx:gap-y-10 lg:grid-cols-3"}>
                            <AdvantageReactIcon icon={<svg className={"w-10 h-10"}>
                                <use href="#atomic-icon"></use>
                            </svg>} title={"Atomic"} text={"Based on Atomic Design Methodology."}/>
                            <AdvantageReactIcon icon={<svg className={"w-10 h-10"}>
                                <use href="#Aa-icon"></use>
                            </svg>} title={"Theme Setup"} text={"Auto updating colors and Styleguide."}/>
                            <AdvantageReactIcon icon={<svg className={"w-11 h-11"}>
                                <use href="#responsive-icon-black"></use>
                            </svg>} title={"Responsive"} text={"Build fully responsive structures easily."}/>
                            <AdvantageReactIcon icon={<svg className={"w-10 h-10"}>
                                <use href="#components-icon"></use>
                            </svg>} title={"Components"} text={"Ever-increasing list of components."}/>
                            <AdvantageReactIcon icon={<svg className={"w-10 h-10"}>
                                <use href="#customize-icon"></use>
                            </svg>} title={"Customisation"} text={"Multiple customisations to suit your style."}/>
                            <AdvantageReactIcon icon={<svg className={"w-10 h-10"}>
                                <use href="#heart_plus-icon"></use>
                            </svg>} title={"Icon System"} text={"An inbuilt Icon system for faster development."}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ReactAdvantage;