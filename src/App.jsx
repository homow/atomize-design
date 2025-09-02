import Icons from "@/components/Icons.jsx";
import Header from "@/components/Header/Header.jsx";
import Main from "@/components/Main/Main.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import {Component, StrictMode} from "react";

class App extends Component {
    render() {
        return (
            <StrictMode>
                <>
                    <Icons/>
                    <Header/>
                    <Main/>
                    <Footer/>
                </>
            </StrictMode>
        )
    }
}

export default App
