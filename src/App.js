import React from "react";
import { useState } from "react";
// import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const [username, setUsername] = useState(""); // username variable
  // const [loading, setLoading] = useState(false); // boolean
  // const [repos, setRepos] = useState([]); // array of repos
  const [userName, setUsername] = useState(""); // username variable
  const [githubRepoName, setGithubRepoName] = useState("express"); // githubRepoName variable
  const [gitHubRepos, setGitHubRepos] = useState([]);
  // const [loading, setLoading] = useState(false); // boolean
  const [counter, setCounter] = useState(0);
  // Extra
  // const [error, setError] = useState(null);

  function handleButtonClickDecrease() {
    setCounter((previousState) => previousState - 1);
  }

  function handleButtonClickIncrease() {
    setCounter((nextState) => nextState + 1);
  }

  // Testar kod:
  // function handleButtonClickAsyncDecrease() {
  //   setTimeout(() => {
  //     setCounter((previousState) => previousState - 1);
  //   }, 2000);
  // }

  // function handleButtonClickAsyncIncrease() {
  //   setTimeout(() => {
  //     setCounter((nextState) => nextState + 1);
  //   }, 2000);
  // }

  // function handleButtonClickDecrease() {
  //   setCounter((previousState) => previousState - 1);
  // }

  // function handleButtonClickIncrease() {
  //   setCounter((nextState) => nextState + 1);
  // }

  //   const linkdata = [
  //     "eslint/eslint",
  //     "oakwood/front-end-questions",
  //     "babel/babel",
  //     "webpack/webpack",
  //     "storybooks/storybook",
  //     "facebook/react",
  //     "reactjs/redux",
  //     "expressjs/express",
  //   ];

  //   const urlstate = {
  //     items: [
  //       { name: "eslint", color: "eslint" },
  //       { name: "oakwood", color: "front-end-questions" },
  //       { name: "babel", color: "babel" },
  //       { name: "webpack", color: "webpack" },
  //       { name: "storybooks", color: "storybook" },
  //       { name: "facebook", color: "react" },
  //       { name: "reactjs", color: "redux" },
  //       { name: "expressjs", color: "express" },
  //     ],
  //   };

  const [products, setProducts] = useState([
    { urlindex: 0, name: "eslint", color: "eslint" },
    { urlindex: 1, name: "oakwood", color: "front-end-questions" },
    { urlindex: 2, name: "babel", color: "babel" },
    { urlindex: 3, name: "webpack", color: "webpack" },
    { urlindex: 4, name: "storybooks", color: "storybook" },
    { urlindex: 5, name: "facebook", color: "react" },
    { urlindex: 6, name: "reactjs", color: "redux" },
    { urlindex: 7, name: "expressjs", color: "express" },
  ]);

  // const addItemHandler = () => {
  //   let newurlindex = { urlindex: 8, name: "www", color: "dn.se" };
  //   let arr = products.concat(newurlindex);
  //   setProducts(arr);
  //   // setProducts(products)
  // };

  // useEffect(() => {
  //   setGitHubRepos([]);
  //   // setInfo({});
  // }, [userName]);

  // useEffect(() => {
  //   searchGitHubRepos();
  // }, []);

  function submitForm(event) {
    event.preventDefault();
    searchGitHubRepos();
  }

  // function handleSubmit(e) {
  //   // no fullpage submit by the browser, we do the requesting and submition:
  //   e.preventDefault();
  //   searchRepos();
  // }

  function searchGitHubRepos() {
    axios({
      method: "GET",
      // url: `https://api.github.com/users/${userName}`,
      url: `https://api.github.com/users/${userName}/repos`,
      // url: `https://api.github.com/repos/{repositoryName}`,
      // url: `https://api.github.com/repos/${userName}`,
      // url: `https://api.github.com/repos/${userName}/${githubRepoName}`,
    }).then((response) => {
      setGitHubRepos(response.data);
      // console.log("response data api github: " + response.data);
    });
  }

  // function searchRepos() {
  //   setLoading(true);

  //   // we make a get request to this url and get back an array of repos from the useraccount:
  //   // the username is from the input and then sets the useState
  //   axios({
  //     method: "get",
  //     // url: `https://api.github.com/users/${username}/repos`,
  //     url: `https://api.github.com/repos/${username}`,
  //   }).then((res) => {
  //     setLoading(false);
  //     setRepos(res.data);
  //     console.log("Här kommer res.data " + res.data);
  //     // the answer in the form of an array of repos is then passed to our setRepos function and state:
  //     //   if (res.data.message) {
  //     //     setError(res.data.message);
  //     //     // setError(true);
  //     //     console.log("Här kommer res.data.message " + res.data.message);
  //     //   } else {
  //     //     setRepos(res.data);
  //     //     setError(null);
  //     //     console.log("Här kommer res.data " + res.data);
  //     //   }
  //   });
  // }

  function showGitHubRepo(githubRepo) {
    // console.log(githubRepo);
    return (
      <li
        className="repo-row-container"
        // className="list-item"
        // onClick={() => getRepoInfo(githubRepo.name)}
        key={githubRepo.id}
      >
        <h3 className="repo-full-name">{githubRepo.full_name}</h3>
        <h3 className="repo-description">{githubRepo.description}</h3>
        <h3 className="repo-stargazers-count">{githubRepo.stargazers_count}</h3>
        {/* <h3 className="repo-name">{githubRepo.name}</h3> */}
        {/* <h3 className="repo-language">{githubRepo.language}</h3> */}
        {/* <img
          src={githubRepo.owner.avatar_url}
          className="github-repo-name-img"
          alt="small avatar of the repo user"
        /> */}
        {/* - full name (`full_name`)
        - description (`description`)
        - amount of stars (`stargazers_count`) */}
      </li>
    );
  }

  // function renderRepo(repo) {
  //   // console.log(repo);
  //   return (
  //     <li className="list-item" key={repo.id}>
  //       {/* <h3 className="repo-name">{repo.name}</h3> */}
  //       <div className="repo-name">{repo.stargazers_count}</div>
  //       <div className="repo-name">{repo.description}</div>
  //       <div className="repo-name">{repo.full_name}</div>
  //       {/* <h6 className="repo-name">{repo.blog}</h6>
  //           <h6 className="repo-name">{repo.bio}</h6> */}
  //       {/* <h3 className="repo-language">{repo.language}</h3> */}
  //       {/* <img
  //             className="repo-name-img"
  //             src={repo.owner.avatar_url}
  //             // wrapped
  //             // ui={false}
  //             alt="large avatar of Daniel"
  //             // width={30}
  //             // height={30}
  //           /> */}
  //     </li>
  //   );
  // }
  return (
    <div id="app-container">
      {/* <div>{gitRepos}</div> */}
      {/* <button
        className="input"
        placeholder="GitHub User Name"
        value={userName}
        onClick={(event) => setUsername(event.target.value)}
      >
        setUsername
      </button> */}
      <div>
        {/* <button onClick={handleButtonClickAsyncDecrease}>Async Decrease</button>
        <button onClick={handleButtonClickAsyncIncrease}>Async Increase</button>
        <button onClick={handleButtonClickDecrease}>Decrease</button>
        <button onClick={handleButtonClickIncrease}>Increase</button> */}
        {/* <div>{git[2].repo}</div> */}
        {/* <div>{git}</div> */}
        {/* <div>{setGit}</div> */}
        {/* <ul className="list-item-container-left">
          <li className="left-container-row">
            {gitHubRepos.map(showGitHubRepo)}
          </li>
        </ul> */}
      </div>
      <div className="button-container">
        <form className="form">
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
        </form>
      </div>
      {/* <div>
        <ul>
          {notes.map((note) => (
            <li>{note}</li>
          ))}
        </ul>
      </div> */}
      <div id="app-counter-container">
        <div id="button-container">
          {/* <button id="increment-repo" onClick={() => setGit(git + 1)}>
            <div id="div-tag-plus-container">
              <div className="animate-charcter-increment" id="div-tag-plus">
                +&ensp;
              </div>
            </div>
            increment
          </button> */}
          {/* <button id="decrement-repo" onClick={() => setGit(git - 1)}>
            <div id="div-tag-plus-container">
              <div className="animate-charcter-increment" id="div-tag-minus">
                -&ensp;
              </div>
            </div>
            decrement
          </button> */}
          {/* <div className="User-App">
            <ul>{final}</ul>
          </div> */}
          {/* <div className="User-App">
            <ul>
              {users.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
          </div> */}
          {/* <div id="c">
            <div id="b"></div>
          </div> */}
          {/* <div>Button</div> */}
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
            <div id="counter-container">
              <div id="counter">Counter: {counter}</div>
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
          <div>
            <form className="todo-list">
              <ul>
                {/* {gitRepos.map((gitRepo, i) => (
                  <div className="todo"> */}
                {/* <div className="checkbox" /> */}
                {/* <div type="text" value={gitRepo}>
                      {gitRepo}
                    </div> */}
                {/* <input type="text" value={gitRepo} /> */}
                {/* <input type="text" value={gitRepo.first} /> */}
                {/* <input type="text" value={gitRepo.second} /> */}
                {/* </div>
                ))} */}
              </ul>
            </form>
          </div>
          {/* <div className="repos-map">
            {repos.map((repo, index) => (
              <li key={index}>{repo}</li>
            ))}
          </div> */}
        </div>
      </div>
    </div>
    // <div>
    //   <div>Test</div>
    //   <ul>
    //     {products.map((urlObj) => (
    //       <li key={urlObj.urlindex}>{urlObj.color}</li>
    //     ))}
    //   </ul>
    //   <button onClick={addItemHandler}>Add Item</button>
    //   {/* <div>
    //   {linkdata.map((url, i) => (
    //     <li key={i}>{url}</li>
    //   ))}
    // </div> */}
    //   <form>
    //     {/* <input
    //     className="input"
    //     // useState Hook call username:
    //     value={username}
    //     placeholder="GitHub Username"
    //     // call the setUsername() function:
    //     onChange={(e) => setUsername(e.target.value)}
    //     required={true}
    //     name="search"
    //     type="search"
    //   /> */}
    //     <button
    //       className="button"
    //       onClick={handleSubmit}
    //       // handleSubmit() function:
    //     >
    //       {/* {loading ? "Searching..." : "Search"} */}
    //       Search
    //     </button>
    //   </form>
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
    //   {/* <div className="results-container">{repos.map(renderRepo)}</div> */}
    // </div>
  );
}

export default App;
