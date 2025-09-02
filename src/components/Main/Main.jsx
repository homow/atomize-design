import { Component } from 'react';
import HeroSection from '@/components/Main/hero-section/HeroSection.jsx';

class Main extends Component {
    render () {
        return (
            <main className={"pt-14"}>
                <HeroSection/>
            </main>
        )
    }
}

export default Main