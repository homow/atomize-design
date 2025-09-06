import {Component} from 'react';
import CodeText from "@/layout/main/code-section/code-text/CodeText.jsx";
import UserBoxes from "@/layout/main/code-section/user-boxes/UserBoxes.jsx";

class CodeSection extends Component {
    render() {
        return (
            <section className={"py-30 container"}>
                <div className={"relative"}>

                    {/* <=== code text ===> */}
                    <div className={"flex-1 w-full sm:w-9/10"}>
                        <CodeText/>
                    </div>

                    {/* <=== user boxes ===> */}
                    <div className={"absolute rounded-lg overflow-hidden max-h-140 left-1/2 -translate-x-1/2 top-full w-full xx:w-auto sm:right-0 sm:left-auto sm:translate-x-0 sm:top-1/2 sm:-translate-y-1/2 sm:max-h-180"}>

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