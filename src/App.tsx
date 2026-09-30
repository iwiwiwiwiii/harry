import './App.css';
import { characters } from './data/characters';

function App() {
    return (
        <div className="app">
            <header className="header">
                <h1 className="header__title">Harry Potter</h1>
                <p className="header__subtitle">
                    View all characters from the Harry Potter universe
                </p>
            </header>

            <div className="filters">
                <div className="field">
                    <label className="field__label" htmlFor="name">Name</label>
                    <input
                        id="name"
                        className="field__input"
                        type="text"
                        placeholder="Hermione"
                    />
                </div>

                <div className="field">
                    <label className="field__label" htmlFor="school">School</label>
                    <select id="school" className="field__select" defaultValue="">
                        <option value="" disabled>Choose one</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                    </select>
                </div>
            </div>

            <div className="grid">
                {characters.map((ch) => (
                    <article className="card" key={ch.id}>
                        <img className="card__image" src={ch.image} alt={ch.name} />
                        <div className="card__body">
                            <h3 className="card__name">{ch.name}</h3>
                            <ul className="card__info">
                                <li><b>Actor:</b> {ch.actor}</li>
                                <li><b>Gender:</b> {ch.gender}</li>
                                <li><b>House:</b> {ch.house}</li>
                                <li><b>Wand core:</b> {ch.wandCore}</li>
                                <li><b>Alive:</b> {ch.alive}</li>
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default App;