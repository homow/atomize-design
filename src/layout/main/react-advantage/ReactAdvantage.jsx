import {Component} from 'react';
import AdvantageReactIcon from "@/layout/main/react-advantage/advantage-react-icon/AdvantageReactIcon.jsx";

class ReactAdvantage extends Component {
    render() {
        return (
            <section className={"pt-20"}>
                <div className={"container"}>
                    {/* <=== circle borders box ===> */}
                    <div className={"relative my-20 size-80"}>
                        <div className={"*:absolute"}>

                            {/* <=== circle border ===> */}
                            <div className={"w-full h-full -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-15"}></div>
                            <div className={"w-8/10 h-8/10 -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-25"}></div>
                            <div className={"w-6/10 h-6/10 -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-35"}></div>
                            <div className={"w-4/10 h-4/10 -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-45"}></div>

                            {/* <=== react icon ===> */}
                            <span className={"left-1/2 top-1/2 -translate-1/2 max-w-max"}>
                                <svg className={"w-25 h-[6rem]"}>
                                    <use href="#big-react-icon"></use>
                                </svg>
                            </span>

                            <span className={"bg-orange-300 rounded-full p-2 top-20 left-8 shadow-primary"}>
                                <svg className={"w-5 h-5 fill-primary-bg"}>
                                    <use href="#plus-icon"></use>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        {/* <=== info ===> */}
                        <h2 className={"font-bold text-3xl tracking-wider leading-10 md:text-4xl"}>
                            Elegant & consistent UI, powered by <span className={"text-cyan-400"}>React</span>.
                        </h2>

                        {/* <=== advantage react icon, title and text ===> */}
                        <div className={"container mt-8 max-xx:space-y-6 xx:grid xx:grid-cols-2 xx:gap-3"}>
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