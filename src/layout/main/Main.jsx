import { Component } from 'react';
import HeroSection from '@/layout/main/hero-section/HeroSection.jsx';
import WhyAtomize from "@/layout/main/why-atomize/WhyAtomize.jsx";

class Main extends Component {
    render () {
        return (
            <main className={"pt-30 md:pt-40 space-y-20"}>
                {/* <=== hero section ===> */}
                <HeroSection/>

                {/* <=== why use atomize ===> */}
                <WhyAtomize/>
            </main>
        )
    }
}

export default Main