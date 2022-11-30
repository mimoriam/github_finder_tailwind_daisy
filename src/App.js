import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { Navbar } from "./components/layout/Navbar";

export const App = () => {
    return (
        <Router>
            <div className="flex flex-col h-screen justify-between">
                <Navbar/>
            </div>

            <div>
                Content
            </div>
        </Router>
    )
}