import {Component, StrictMode} from "react";
import SvgDefs from "@/components/icons/SvgDefs.jsx";
import Header from "@/layout/header/Header.jsx";
import Main from "@/layout/main/Main.jsx";
import Footer from "@/layout/footer/Footer.jsx";

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
