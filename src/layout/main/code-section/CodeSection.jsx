import {Component} from 'react';
import CodeText from "@/layout/main/code-section/code-text/CodeText.jsx";
import UserBoxes from "@/layout/main/code-section/user-boxes/UserBoxes.jsx";

class CodeSection extends Component {
    render() {
        return (
            <section id={"code-section"} className={"container pt-30 pb-140 sm:pb-80 min-[646px]:pb-92! lg:pb-30!"}>
                <div className={"relative"}>

                    {/* <=== code text ===> */}
                    <h2 className={"w-full xs:w-10/12 mx-auto text-center tracking-wide text-3xl font-bold mb-18 leading-12 sm:max-w-160 sm:text-4xl"}>
                        Code the perfect design for each project using Atomize.
                    </h2>

                    <div className={"flex-1 w-full sm:w-9/10"}>
                        <CodeText/>
                    </div>

                    {/* <=== user boxes ===> */}
                    <div className={"absolute rounded-lg overflow-hidden max-h-140 left-1/2 -translate-x-1/2 top-full w-full xx:w-auto sm:right-0 sm:left-auto sm:translate-x-0 sm:top-38 sm:max-h-180"}>

                        {/* <=== user profile and payment card ===> */}
                        <div className={"animate-floating-box space-y-3"}>
                            <UserBoxes/>
                            <UserBoxes/>
                            <UserBoxes/>
                        </div>

                        {/* <=== bottom highlight ===> */}
                        <div className="pointer-events-none absolute bottom-0 left-4 w-full h-16 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-primary-bg/0"></div>

                        {/* <=== top highlight ===> */}
                        <div className="pointer-events-none absolute top-0 w-full h-16 bg-gradient-to-b from-primary-bg via-primary-bg/70 to-primary-bg/0"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CodeSection;