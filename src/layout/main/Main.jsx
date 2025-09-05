import { Component } from 'react';
import HeroSection from '@/layout/main/hero-section/HeroSection.jsx';
import WhyAtomize from "@/layout/main/why-atomize/WhyAtomize.jsx";
import ReactAdvantage from "@/layout/main/react-advantage/ReactAdvantage.jsx";
import CodeSection from "@/layout/main/code-section/CodeSection.jsx";

class Main extends Component {
    render () {
        return (
            <main className={"py-30 md:pt-40 divide-y divide-gray-200 dark:divide-gray-900"}>
                {/* <=== hero section ===> */}
                <HeroSection/>

                {/* <=== why use atomize ===> */}
                <WhyAtomize/>

                {/* <=== react advantage section ===> */}
                <ReactAdvantage/>

                {/* <=== code section ===> */}
                <CodeSection/>
            </main>
        )
    }
}

export default Main