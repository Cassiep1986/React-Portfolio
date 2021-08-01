function Portfolio() {
  return (
    <>
    <h1> My Work </h1>
      <div className="flex3">
        <section className="textcontainer">
          <a href="https://github.com/Cassiep1986/Professional-README-Generator">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://github.com/Cassiep1986/Professional-README-Generator">
            {" "}
            <img
              className="cardimg"
              src="./images/README_Demo_Video.gif"
              alt="Application Demo Gif"
            ></img>
          </a>
          <p className="pictext2">README Generator</p>
        </section>

        <section className="textcontainer">
          <a href="https://github.com/Cassiep1986/Financial-Buzz">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://financial-buzz.herokuapp.com">
            <img
              className="cardimg"
              src="./images/Financial_buzz.PNG"
              alt="application pic"
            ></img>
          </a>
          <p className="pictext3">Financial Buzz</p>
        </section>
      </div>

      
      <div className="flex3">
        <section className="textcontainer">
          <a href="https://github.com/AdamDavidBurch42/Jokester">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://adamdavidburch42.github.io/Jokester">
            <img
              className="cardimg"
              src="./images/Jokester_Snippet.PNG"
              alt="Application Pic"
            ></img>
          </a>
          <p className="pictext2">Jokester</p>
        </section>

        <section className="textcontainer">
          <a href="https://github.com/Cassiep1986/Nosql-Workout-Tracker">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://my-nosql-fitness-tracker.herokuapp.com/">
            <img
              className="cardimg"
              src="./images/Fitness_Tracker_Demo.gif"
              alt="Application demo gif"
            ></img>
          </a>
          <p className="pictext3">Fitness Tracker</p>
        </section>
      </div>

      <div className="flex3">
        <section className="textcontainer">
          <a href="https://github.com/Cassiep1986/Third-Party-APIs-Work-Day-Scheduler">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://cassiep1986.github.io/Third-Party-APIs-Work-Day-Scheduler/">
            <img
              className="cardimg"
              src="./images/workday.PNG"
              alt="Application picture"
            ></img>
          </a>
          <p className="pictext2">Work Day Scheduler</p>
        </section>

        <section className="textcontainer">
          <a href="https://github.com/Cassiep1986/Express.js-Note-Taker">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://express-note-taker-cp.herokuapp.com/">
            <img
              className="cardimg"
              src="./images/Note-Taker.gif"
              alt="Application Picture"
            ></img>
          </a>
          <p className="pictext3">Note Taker</p>
        </section>
      </div>
    </>
  );
}


export default Portfolio;