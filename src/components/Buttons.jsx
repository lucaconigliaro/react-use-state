function Buttons({ languages, activeLanguage, changeLanguage }) {
    return (
        <div className="d-flex flex-wrap gap-2 mb-4">
            {languages.map((curLanguage) => (
                <button key={curLanguage.id} onClick={() => changeLanguage(curLanguage)} className={`btn ${activeLanguage.id === curLanguage.id ? `btn-warning` : `btn-primary`}`}>
                    {curLanguage.title}
                </button>
            ))}
        </div>
    );
};

export default Buttons;