import "./App.scss";

import data from "../data.json";

const App = () => {
  const datas = data;
  return (
    <main>
      <section className="section-1">
        <h1>Your Result</h1>
        <div className="result">
          <h2 className="score">76</h2>
          <span className="total">of 100</span>
        </div>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
      <section className="section-2">
        <h2>Summary</h2>
        <ul className="summary-list">
          {datas.map((item, index) => (
            <li
              className="summary-item"
              key={index}
              style={{ backgroundColor: item.currentBackground }}
            >
              <img 
              
              src = {item.icon}
                alt={item.category}
                className="summary-icon"
            />
              <span
                className="summary-title"
                style={{ color: item.currentColor }}
              >
                {item.category}
              </span>
              <span className="summary-score">{item.score}</span>
            </li>
          ))}
        </ul>
        <button className="continue-button" type="button">
          Continue
        </button>
      </section>
    </main>
  );
};

export default App;
