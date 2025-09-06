import {Component} from 'react';
import ModernToolsBox from "@/layout/main/modern-tools/modern-tools-box/ModernToolsBox.jsx";

class ModernTools extends Component {
    render() {
        return (
            <section className={"py-30 container"}>
                <div>
                    <h2 className={"w-full mx-auto text-center text-3xl font-bold mb-18 tracking-wider leading-12 xs:w-10/12 sm:max-w-150 sm:text-4xl"}>
                        A combination of tools to design and develop modern applications at ease.
                    </h2>

                    <div className={"flex flex-col gap-14 items-center justify-center sm:flex-row sm:gap-6 md:gap-12"}>
                        <ModernToolsBox
                            icon={
                                <svg className={"size-12"}>
                                    <use href="#gem-icon"></use>
                                </svg>
                            }
                            title={"Design"}
                            text={"Design website by using Atomize for Sketch App."}
                            btnText={"Design Resource"}
                        />

                        <ModernToolsBox
                            icon={
                                <svg className={"size-12"}>
                                    <use href="#small-react-icon"></use>
                                </svg>
                            }
                            title={"Development"}
                            text={"Bring your designs to life with Atomize for React JS."}
                            btnText={"Documentation"}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default ModernTools;