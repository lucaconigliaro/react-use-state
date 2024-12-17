import { useState } from "react";
import languages from "../data/languages";
import Card from "./Card";
import Buttons from "./Buttons";

function AppMain() {

    const [activeLanguage, setActiveLanguage] = useState(null);

    return (
        <main className="container">
            <div className="d-flex flex-row gap-2 mb-4">
                <Buttons
                    title="Reset"
                    buttonType="danger"
                    handleOnClick={() => {
                        setActiveLanguage(null)
                    }}
                />
                {languages.map((curLang) => (
                    <Buttons
                        key={curLang.id}
                        title={curLang.title}
                        buttonType={activeLanguage && activeLanguage.id === curLang.id ? `warning` : `primary`}
                        handleOnClick={() => setActiveLanguage(curLang)}
                    />
                ))}
            </div>
            <Card activeLanguage={activeLanguage} />
        </main>
    );
};

export default AppMain;