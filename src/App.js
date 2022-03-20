import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// `´nbNB{}[]

const linkdata = [
  "eslint/eslint",
  "oakwood/front-end-questions",
  "babel/babel",
  "webpack/webpack",
  "storybooks/storybook",
  "facebook/react",
  "reactjs/redux",
  "expressjs/express",
  //  *test* "error/error" *test* ,
  //  "IlluminatorWatch/github-step",
  //  *test* "error/error" *test* ,
];

function App() {
  const [gitHubRepo, setGitHubRepo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(null);

  function handleButtonClickDecrease() {
    setCounter((previousState) => previousState - 1);
  }

  function handleButtonClickIncrease() {
    setCounter((nextState) => nextState + 1);
  }

  useEffect(() => {
    setLoading(true);
    setGitHubRepo(null);
    setError(null);

    let repo = linkdata[counter];
    axios({
      method: "GET",
      url: `https://api.github.com/repos/${repo}`,
    })
      .then((response) => {
        setGitHubRepo(response.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError(`The repo: '${repo}' does not exist.`);
        } else {
          setError(`Oops something went wrong.`);
        }
      })
      .finally(() => setLoading(false));
  }, [counter]);

  // lyfta ut:
  function showGitHubRepo(githubRepo) {
    return (
      <div className="repo-row-container" key={githubRepo.id}>
        <h3 className="repo-full-name">
          Repo Name&ensp;<div className="dott-container">&#8231;</div>
          &ensp;{githubRepo.full_name}
        </h3>
        <h3 className="repo-description">
          Description&ensp;<div className="dott-container">&#8231;</div>
          &ensp;{githubRepo.description}
        </h3>
        <h3 className="repo-stargazers-count">
          &#10023;&ensp;<div className="dott-container">&#8231;</div>&ensp;
          {githubRepo.stargazers_count}
        </h3>
      </div>
    );
  }

  // kanske lyfta ut?:
  function showLoading(loading) {
    return (
      <div className="loading-row-container" key={loading.id}>
        <h3 className="loading-loading">Repo is loading</h3>
      </div>
    );
  }
  // kanske lyfta ut?:
  function showError(error) {
    return (
      <div className="error-row-container" key={error.id}>
        <h3 className="error-error">{error}</h3>
      </div>
    );
  }
  // kanske lyfta ut knappar om jag hinner
  return (
    <div id="app-container">
      <div></div>
      <div className="button-container"></div>
      <div id="app-counter-container">
        <div id="button-container">
          <div id="button-container-decrement">
            <button
              id="decrement"
              onClick={handleButtonClickDecrease}
              disabled={counter === 0}
            >
              <div id="div-tag-decrement-container">
                <div
                  className="animate-charcter-decrement"
                  id="div-tag-decrement"
                >
                  -{/* &ensp; */}
                </div>
              </div>
              decrement
            </button>
          </div>
          <div id="counter-container-outer">
            <div id="counter-container">
              <div id="counter">Counter: {counter}</div>
            </div>
          </div>
          <div id="button-container-increment">
            <button
              id="increment"
              onClick={handleButtonClickIncrease}
              disabled={counter === linkdata.length - 1}
            >
              <div id="div-tag-increment-container">
                <div
                  className="animate-charcter-increment"
                  id="div-tag-increment"
                >
                  +{/* &ensp; */}
                </div>
              </div>
              increment
            </button>
          </div>
          <div className="response-container">
            <div className="repo-container">
              {gitHubRepo ? showGitHubRepo(gitHubRepo) : null}
            </div>
            <div className="loading-container">
              {loading ? showLoading(loading) : null}
            </div>
            <div className="error-container">
              {error ? showError(error) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// `´nbNB{}[]

export default App;
