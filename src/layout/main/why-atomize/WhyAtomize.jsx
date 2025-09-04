import {Component} from 'react';
import FeatureIconTitle from "@/layout/main/why-atomize/feature-icon-title/FeatureIconTitle.jsx";

class WhyAtomize extends Component {
    render() {
        return (
            <section id={"feature"} className={"pt-20"}>
                <div className={"container space-y-14"}>
                    <div className={"space-y-4"}>
                        <h2 className={"bg-primary-base text-primary-bg max-w-max py-1.5 px-4 rounded-full text-xs font-medium"}>Key Feature</h2>

                        <h3 className={"text-3xl leading-10 tracking-wide font-medium"}>Why use Atomize React?</h3>

                        <p className={"tracking-wide text-primary-gray"}>
                            Atomize React helps you in building fully responsive websites and products that match your style.
                        </p>
                    </div>

                    <div className={"space-y-14 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-4"}>
                        <FeatureIconTitle icon={<svg className={"h-8 w-8"}>
                            <use href="#flexible-icon"></use>
                        </svg>} title={"Flexible Grid"} text={"Change grid variables or give decimal column size."} />
                        <FeatureIconTitle icon={<svg className={"h-8 w-8"}>
                            <use href="#style-icon"></use>
                        </svg>} title={"Style guide"} text={"Update theme throughout the application easily."} />
                        <FeatureIconTitle icon={<svg className={"h-8 w-8"}>
                            <use href="#spacing-icon"></use>
                        </svg>} title={"Spacing"} text={"A better and controlled way of update spacing."} />
                        <FeatureIconTitle icon={<svg className={"h-8 w-8"}>
                            <use href="#responsive-icon"></use>
                        </svg>} title={"Responsive"} text={"Better control to make the app responsive."} />
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyAtomize;