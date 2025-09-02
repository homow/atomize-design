import SvgDefs from "@/components/svg-defs/SvgDefs.jsx";
import Header from "@/components/header/Header.jsx";
import Main from "@/components/main/Main.jsx";
import Footer from "@/components/footer/Footer.jsx";
import {Component, StrictMode} from "react";

class App extends Component {
    render() {
        return (
            <StrictMode>
                <>
                    {/* <=== svg icons ===> */}
                    <SvgDefs/>
                    <Header/>
                    <Main/>
                    <Footer/>
                </>
            </StrictMode>
        )
    }
}

export default App
