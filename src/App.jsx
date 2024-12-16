import { useState } from "react"
import languages from "./data/languages"

function App() {
  const [activeLanguage, setActiveLanguage] = useState(0);

  const changeLanguage = (curLanguage) => {
    setActiveLanguage(curLanguage)
  }


  return (
    <>
      <header className="mb-5">
        <h1>Learn Web developement</h1>
      </header>
      <main>
        <div className="container">
          <div className="d-flex flex-wrap gap-2 mb-4">
            {languages.map((curLanguage) => (
              <button onClick={() => { setActiveLanguage(curLanguage) }} key={curLanguage.id} className={`btn ${activeLanguage.id === curLanguage.id ? `btn-warning` : `btn-primary`}`}>
                {curLanguage.title}
              </button>
            ))}
          </div>
          <div className="card p-3">
            {activeLanguage ? (
              <div>
                <h2>{activeLanguage.title}</h2>
                <p>{activeLanguage.description}</p>
              </div>
            ) : (
              <p>Nessun linguaggio selezionato</p>
            )}
          </div>
        </div>
      </main >
    </>
  );
};

export default App;