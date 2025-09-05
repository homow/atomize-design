import {Component} from 'react';
import BottomHeroSection from "@/layout/main/hero-section/bottom-hero-section/BottomHeroSection.jsx";
import TopHeroSection from "@/layout/main/hero-section/top-hero-section/TopHeroSection.jsx";

class HeroSection extends Component {
    render() {
        return (
            <section className={"pb-22 container"}>
                {/* <=== top hero section ===> */}
                <TopHeroSection/>
                {/* <=== bottom hero section ===> */}
                <BottomHeroSection/>
            </section>
        )
    }
}

export default HeroSection;