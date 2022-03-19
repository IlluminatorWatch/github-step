import React from "react";
// import { useState } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// `´nbNB{}[]

function App() {
  const linkdata = [
    "eslint/eslint",
    "oakwood/front-end-questions",
    "babel/babel",
    "webpack/webpack",
    "storybooks/storybook",
    "facebook/react",
    "reactjs/redux",
    "expressjs/express",
  ];

  // const [username, setUsername] = useState(""); // username variable
  // const [loading, setLoading] = useState(false); // boolean
  // const [repos, setRepos] = useState([]); // array of repos
  const [userName, setUsername] = useState([linkdata]); // username variable
  // const [userName, setUsername] = useState([{ linkdata }]); // username variable
  // const [githubRepoName, setGithubRepoName] = useState("express"); // githubRepoName variable
  const [gitHubRepos, setGitHubRepos] = useState([]);
  // const [loading, setLoading] = useState(false); // boolean
  // const [counter, setCounter] = useState(0);

  // Extra
  // const [error, setError] = useState(null);

  function handleButtonClickDecrease() {
    searchGitHubRepos(userName);
    // setUsername((previousState) => previousState - 1);
    setTimeout(() => {
      setUsername((previousState) => previousState - 1);
    }, 2000);
    // searchGitHubRepos(userName);
    // setCounter((previousState) => previousState - 1);
  }

  function handleButtonClickIncrease() {
    searchGitHubRepos(userName);
    // setUsername((nextState) => nextState + 1);
    setTimeout(() => {
      setUsername((nextState) => nextState + 1);
    }, 2000);
    // searchGitHubRepos(userName);
    // setCounter((nextState) => nextState + 1);
  }

  useEffect(() => {
    setGitHubRepos([]);
    // setInfo({});
  }, [userName]);

  // useEffect(() => {
  //   searchGitHubRepos();
  // }, []);

  // function submitForm(event) {
  //   event.preventDefault();
  //   searchGitHubRepos();
  // }

  // function handleSubmit(e) {
  //   // no fullpage submit by the browser, we do the requesting and submition:
  //   e.preventDefault();
  //   searchRepos();
  // }

  function searchGitHubRepos() {
    axios({
      method: "GET",
      url: `https://api.github.com/repos/${userName}`,
    }).then((response) => {
      setGitHubRepos(response.data);
      // console.log("response data api github: " + response.data);
    });
  }

  function showGitHubRepo(githubRepo) {
    // console.log(githubRepo);
    return (
      <li className="repo-row-container" key={githubRepo.id}>
        <h3 className="repo-full-name">{githubRepo.full_name}</h3>
        <h3 className="repo-description">{githubRepo.description}</h3>
        <h3 className="repo-stargazers-count">{githubRepo.stargazers_count}</h3>
      </li>
    );
  }

  return (
    <div id="app-container">
      <div>
        <ul className="list-item-container-left">
          <li className="left-container-row">
            {gitHubRepos.map(showGitHubRepo)}
          </li>
        </ul>
      </div>
      <div className="button-container">
        {/* <form className="form">
          <input
            className="input"
            placeholder="Gitrepo UserName"
            value={userName}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button
            className="button"
            id="git-button-search"
            onClick={submitForm}
          >
            Searching
          </button>
        </form> */}
      </div>
      <div id="app-counter-container">
        <div id="button-container">
          <div id="button-container-one">
            <button id="decrement" onClick={handleButtonClickDecrease}>
              <div id="div-tag-minus-container">
                <div className="animate-charcter-decrement" id="div-tag-minus">
                  -&ensp;
                </div>
              </div>
              decrement
            </button>
            {/* <button id="decrement" onClick={() => setCounter(counter - 1)}>
              <div id="div-tag-minus-container">
                <div className="animate-charcter-decrement" id="div-tag-minus">
                  -&ensp;
                </div>
              </div>
              decrement
            </button> */}
          </div>
          {/* <div>-&nbsp;Space&emsp;Space&ensp;Space&nbsp;Space+&nbsp;</div> */}
          <div id="button-container-two">
            {/* <div id="counter-container">
              <div id="counter">Counter: {counter}</div>
            </div> */}
            <div id="counter-container">
              <div id="counter">setUsername indexOf: {userName.indexOf}</div>
              {/* <div id="counter">setUsername indexOf: {userName}</div> */}
              {/* <div>
                {userName.map((repo) => (
                  <li>{repo}</li>
                ))}
              </div> */}
            </div>
          </div>
          <div id="button-container-three">
            <button id="increment" onClick={handleButtonClickIncrease}>
              <div id="div-tag-plus-container">
                <div className="animate-charcter-increment" id="div-tag-plus">
                  +&ensp;
                </div>
              </div>
              increment
            </button>
            {/* <button id="increment" onClick={() => setCounter(counter + 1)}>
              <div id="div-tag-plus-container">
                <div className="animate-charcter-increment" id="div-tag-plus">
                  +&ensp;
                </div>
              </div>
              increment
            </button> */}
          </div>
          {/* <div>
            {repos.map((repo) => (
              <li>{repo}</li>
            ))}
          </div> */}
        </div>
        <div>
          {/* <button id="decrement" onClick={() => setGitRepos(gitRepos - 1)}>
            <div id="div-tag-minus-container">
              <div className="animate-charcter-decrement" id="div-tag-minus">
                -&ensp;
              </div>
            </div>
            decrement
          </button> */}
          {/* <div>{gitRepos}</div> */}
          {/* <button id="increment" onClick={() => setGitRepos(gitRepos + 1)}>
            <div id="div-tag-plus-container">
              <div className="animate-charcter-increment" id="div-tag-plus">
                +&ensp;
              </div>
            </div>
            increment
          </button> */}
          <div></div>
        </div>
      </div>
    </div>

    //   {/* {error ? <h6>Something went wrong: {error}</h6> : <h6>Suxxez!</h6>} */}
    //   <button id="increment-repo" onClick={() => setUsername(username + 1)}>
    //     <div id="div-tag-plus-container">
    //       <div className="animate-charcter-increment" id="div-tag-plus">
    //         +&ensp;
    //       </div>
    //     </div>
    //     increment step one github repo forward
    //   </button>
    //   <button id="decrement-repo" onClick={() => setUsername(username - 1)}>
    //     <div id="div-tag-plus-container">
    //       <div className="animate-charcter-increment" id="div-tag-minus">
    //         -&ensp;
    //       </div>
    //     </div>
    //     decrement step one github repo back
    //   </button>
    // </div>
  );
}

export default App;
