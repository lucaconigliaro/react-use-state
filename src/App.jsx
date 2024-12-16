import languages from "./data/languages"

function App() {
 
  return (
    <>
      <header className="mb-5">
        <h1>Learn Web developement</h1>
      </header>
      <main>
        <div className="container">
          <div className="d-flex flex-wrap gap-2 mb-4">
          {languages.map((curLanguage) => (
          <button key={curLanguage.id} className="btn btn-primary">
            {curLanguage.title}
          </button>
        ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
