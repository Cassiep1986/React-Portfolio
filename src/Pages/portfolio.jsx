function Portfolio() {
  return (
    <div className = "container  text-center">
    <h1> My Work </h1>
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
    <a href="https://github.com/Cassiep1986/Professional-README-Generator">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://github.com/Cassiep1986/Professional-README-Generator">
      <img src="./images/README_Demo_Video.gif" className="card-img-top w-100" alt="Application Demo Gif"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">README Generator</h5>
        <p className="card-text">This application creates a professional README markdown file.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <a href="https://github.com/Cassiep1986/Financial-Buzz">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://financial-buzz.herokuapp.com">
      <img src="./images/Financial_buzz.PNG" className="card-img-top w-100" alt="Application image"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Financial Buzz</h5>
        <p className="card-text">This application will enable a user to create a budget to manage their monthly expenses with ease. Using submitted income and cost information, a remaining balance will be provider to the user enabling additional future financial planning.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <a href="https://github.com/AdamDavidBurch42/Jokester">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://adamdavidburch42.github.io/Jokester">
      <img src="./images/Jokester_Snippet.PNG" className="card-img-top w-100" alt="Application Image"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Jokester</h5>
        <p className="card-text">This project contains a collection of jokes for the user to search by category. The user will also have the ability to obtain a random joke and save their favorite jokes to local storage..</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <a href="https://github.com/Cassiep1986/Nosql-Workout-Tracker">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://my-nosql-fitness-tracker.herokuapp.com/">
      <img src="./images/Fitness_Tracker_Demo.gif" className="card-img-top w-100" alt="Application Demo"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Fitness Tracker</h5>
        <p className="card-text">This application enables the user to keep track of exercises preformed and displays a graphical representation of daily workouts..</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <a href="https://github.com/Cassiep1986/Third-Party-APIs-Work-Day-Scheduler">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://cassiep1986.github.io/Third-Party-APIs-Work-Day-Scheduler/">
      <img src="./images/workday.PNG" className="card-img-top w-100 h-80 " alt="Application image"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">WorkDay Scheduler</h5>
        <p className="card-text">This application enables a user to track and save daily events.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <a href="https://github.com/Cassiep1986/Express.js-Note-Taker">
            <button className="repotext2">Repo link</button>
          </a>
          <a href="https://express-note-taker-cp.herokuapp.com/">
      <img src="./images/Note-Taker.gif" className="card-img-top w-100 h-100" alt="Application demo"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Note Taker</h5>
        <p className="card-text">This application enables the user to create and save notes. This project contains a collection of jokes for the user to search by category. The user will also have.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}


export default Portfolio;