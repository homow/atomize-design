import { Component } from 'react';
import HeroSection from '@/layout/main/hero-section/HeroSection.jsx';

class Main extends Component {
    render () {
        return (
            <main className={"pt-14 mb-20"}>
                {/* <=== hero section ===> */}
                <HeroSection/>
            </main>
        )
    }
}

export default Main