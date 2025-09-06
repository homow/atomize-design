import {Component} from 'react';
import OverViewBox from "@/layout/main/overview/overview-box/OverViewBox.jsx";

class OverView extends Component {
    render() {
        return (
            <section className={"py-30 container border-none"}>
                <div className={"grid grid-cols-1 gap-y-10 gap-x-8 xs:gap-x-12 justify-items-center justify-self-center xx:grid-cols-2 md:grid-cols-4"}>
                    <OverViewBox title={"15+"} text={"Ready to use React Components"}/>
                    <OverViewBox title={"60+"} text={"Predefined colors for theme setup"}/>
                    <OverViewBox title={"</>"} text={"Detailed documentation for each component"}/>
                    <OverViewBox title={"FREE"} text={"Open source with regular updates"}/>
                </div>
            </section>
        );
    }
}

export default OverView;