import React from "react";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import InteractiveContent from "./components/InteractiveContent";
import OurAdvant from "./components/OurAdvant";
import EasyGet from "./components/EasyGet";
import RepayLoan from "./components/RepayLoan";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div style={{width: '100vw', height: '100vh'}}>
                <Header/>
                <InteractiveContent />
                 <OurAdvant />
                <EasyGet />
                <RepayLoan />
            </div>
        </BrowserRouter>
    );
};

export default App;
