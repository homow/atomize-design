import {Component} from 'react';

class HeroSection extends Component {
    render() {
        return (
            <section>
                <div className={"container"}>
                    {/* <=== top hero section ===> */}
                    <div className={"space-y-6"}>
                        <h1>Design System for ReactJs</h1>
                        <h2 className={"max-w-144 mx-auto text-primary-gray font-light text-lg text-center"}>
                            Atomize React is a UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly.
                        </h2>

                        {/* <=== CTA in top hero section ===> */}
                        <div className={"mt-8 py-2 flex gap-4 flex-col items-center justify-center sm:flex-row *:w-full *:sm:w-max *:text-center *:rounded-lg *:px-8 *:py-3 *:text-sm *:transition-all *:font-medium"}>
                            <a target={"_blank"} href="https://homow.github.io/kasuka/" className={"block bg-blue-500 text-white hover:opacity-90"}>
                                Get Started Now
                            </a>
                            <a target={"_blank"} href="https://www.youtube.com/watch?v=Y1I55wVvJUs" className={"flex flex-row items-center justify-center gap-2 text-primary-gray border hover:bg-bg-gray-hover-lt border-border-gray  hover:border-border-gray-hover"}>
                                <svg className={"size-5"}>
                                    <use href="#play-icon"></use>
                                </svg>
                                Watch Video
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeroSection;