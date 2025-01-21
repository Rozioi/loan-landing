import React from "react";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import InteractiveContent from "./components/InteractiveContent";
import OurAdvant from "./components/OurAdvant";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div style={{width: '100vw', height: '100vh'}}>
                <Header/>
                <InteractiveContent />
                 <OurAdvant />
            </div>
        </BrowserRouter>
    );
};

export default App;
