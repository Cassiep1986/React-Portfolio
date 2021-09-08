import { Card, Button } from "react-bootstrap";

function Portfolio() {
  return (

    <div className = "container  text-center">
    <h1> My Work </h1>
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
          <a href="https://my-nosql-fitness-tracker.herokuapp.com/">
      <img src="./images/Fitness_Tracker_Demo.gif" className="card-img-top w-100" alt="Application Demo"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Fitness Tracker</h5>
        <p className="card-text">This application uses JavaScript and Mongoose to enable the user to keep track of exercises preformed. Using chart.js and bootstrap, it displays a graphical representation of daily workouts.</p>
        <a href="https://github.com/Cassiep1986/Nosql-Workout-Tracker"><Button variant="primary">Repo Link</Button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
          <a href="https://adamdavidburch42.github.io/Jokester">
      <img src="./images/Jokester_Snippet.PNG" className="card-img-top w-100" alt="Snippit of Application"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Jokester</h5>
        <p className="card-text">This project uses JQuery and jokeapi to retrieve a collection of jokes for the user to search by category. Designed using Bulma CSS framework, the user also has the ability to obtain a random joke and save their favorite jokes to local storage.</p>
        <a href="https://github.com/AdamDavidBurch42/Jokester"><Button variant="primary">Repo Link</Button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
          <a href="https://enigmatic-cliffs-62270.herokuapp.com">
      <img src="./images/blog_img.PNG" className="card-img-top w-100" alt="Application Demo Gif"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Tech Blog</h5>
        <p className="card-text">This full stack application uses javaScript, handlebars and sequelize to enable a user to add and remove "Tech Blog" posts using an individualized user account.</p>
        <a href="https://github.com/Cassiep1986/MVC-Tech-Blog"><Button variant="primary">Repo Link</Button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
          <a href="https://financial-buzz.herokuapp.com">
      <img src="./images/Financial_buzz.PNG" className="card-img-top w-100" alt="Snippit of Application"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Financial Buzz</h5>
        <p className="card-text">This application will enable a user to create a budget to manage their monthly expenses with ease. Using submitted income and cost information, a remaining balance will be provider to the user enabling additional future financial planning.</p>
        <a href="https://github.com/Cassiep1986/Financial-Buzz"><Button variant="primary">Repo Link</Button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
          <a href="https://drive.google.com/file/d/1AbplFeh8VbFrxcDBtWqqhl8wEHe2R8lF/view">
      <img src="./images/README_Demo_Video.gif" className="card-img-top w-100" alt="Application Demo Gif"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Readme Generator</h5>
        <p className="card-text">This full stack application uses javaScript, handlebars and sequelize to enable a user to add and remove "Tech Blog" posts using an individualized user account.</p>
        <a href="https://github.com/Cassiep1986/Professional-README-Generator"><Button variant="primary">Repo Link</Button></a>
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
}


export default Portfolio;