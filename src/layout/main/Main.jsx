import { Component } from 'react';
import HeroSection from '@/layout/main/hero-section/HeroSection.jsx';
import WhyAtomize from "@/layout/main/why-atomize/WhyAtomize.jsx";
import ReactAdvantage from "@/layout/main/react-advantage/ReactAdvantage.jsx";

class Main extends Component {
    render () {
        return (
            <main className={"py-30 md:pt-40"}>
                {/* <=== hero section ===> */}
                <HeroSection/>

                {/* <=== why use atomize ===> */}
                <WhyAtomize/>

                {/* <=== react advantage section ===> */}
                <ReactAdvantage/>
            </main>
        )
    }
}

export default Main