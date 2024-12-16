import { useState } from "react";
import languages from "../data/languages";
import Card from "./Card";
import Buttons from "./Buttons";

function AppMain() {

    const [activeLanguage, setActiveLanguage] = useState(0);
    const changeLanguage = (curLanguage) => {
        setActiveLanguage(curLanguage);
    };

    return (
        <main>
            <div className="container">
                <Buttons
                    languages={languages}
                    activeLanguage={activeLanguage}
                    setActiveLanguage={setActiveLanguage} />
                <Card activeLanguage={activeLanguage} />
            </div>
        </main>
    );
};

export default AppMain;