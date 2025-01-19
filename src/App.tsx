import React from "react";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div style={{width: '100vw', height: '100vh'}}>
                <Header/>
            </div>
        </BrowserRouter>
    );
};

export default App;
