import { Component } from 'react';
import HeroSection from '@/layout/main/hero-section/HeroSection.jsx';

class Main extends Component {
    render () {
        return (
            <main className={"pt-30 md:pt-40"}>
                {/* <=== hero section ===> */}
                <HeroSection/>
            </main>
        )
    }
}

export default Main