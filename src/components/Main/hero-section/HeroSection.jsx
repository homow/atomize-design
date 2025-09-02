import {Component} from 'react';
import BottomHeroSection from "@/components/main/hero-section/BottomHeroSection.jsx";
import TopHeroSection from "@/components/main/hero-section/TopHeroSection.jsx";

class HeroSection extends Component {
    render() {
        return (
            <section>
                <TopHeroSection/>
                <BottomHeroSection/>
            </section>
        )
    }
}

export default HeroSection;