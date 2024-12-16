function Card({ activeLanguage }) {

    return (
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
    );
};

export default Card;