import {Component} from 'react';
import CodeText from "@/layout/main/code-section/code-text/CodeText.jsx";

class CodeSection extends Component {
    render() {
        return (
            <section className={"py-40 container"}>
                <div className={"flex"}>
                    <CodeText/>
                </div>
            </section>
        );
    }
}

export default CodeSection;