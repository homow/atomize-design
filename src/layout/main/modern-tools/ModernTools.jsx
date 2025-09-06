import {Component} from 'react';
import ModernToolsBox from "@/layout/main/modern-tools/modern-tools-box/ModernToolsBox.jsx";

class ModernTools extends Component {
    render() {
        return (
            <section className={"py-30 container"}>
                <div>
                    <h2 className={"w-full xs:w-10/12 mx-auto text-center tracking-wide text-3xl font-bold mb-18 leading-12 sm:max-w-160 sm:text-4xl"}>
                        A combination of tools to design and develop modern applications at ease.
                    </h2>

                    <div>
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
                        {/*<ModernToolsBox icon={} title={""} text={""} btnText={""}/>*/}
                    </div>
                </div>
            </section>
        );
    }
}

export default ModernTools;