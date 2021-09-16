import { Card, Button } from "react-bootstrap";

function Portfolio() {
  return (

    <div className = "container text-center">
    <h1 className = "titlespace"> My Work </h1>
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
          <a href="https://my-nosql-fitness-tracker.herokuapp.com/" target="_blank" rel="noopener noreferrer">
      <img src="./images/Fitness_Tracker_Demo.gif" className="card-img-top w-100" alt="Application Demo"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Fitness Tracker</h5>
        <p className="card-text">This application uses JavaScript and Mongoose to enable the user to keep track of exercises preformed. Using chart.js and bootstrap, it displays a graphical representation of daily workouts.</p>
        <a href="https://github.com/Cassiep1986/Nosql-Workout-Tracker" target="_blank" rel="noopener noreferrer"><Button variant="primary">Repo Link</Button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
          <a href="https://cassiep1986.github.io/Jokester/" target="_blank" rel="noopener noreferrer">
      <img src="./images/Jokester_Snippet.PNG" className="card-img-top w-100" alt="Snippit of Application"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Jokester</h5>
        <p className="card-text">This project uses JQuery and jokeapi to retrieve a collection of jokes for the user to search by category. Designed using Bulma CSS framework, the user also has the ability to obtain a random joke and save their favorite jokes to local storage.</p>
        <a href="https://github.com/Cassiep1986/Jokester" target="_blank" rel="noopener noreferrer"><Button variant="primary">Repo Link</Button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
          <a href="https://enigmatic-cliffs-62270.herokuapp.com" target="_blank" rel="noopener noreferrer">
      <img src="./images/blog_img.PNG" className="card-img-top w-100" alt="Application Demo Gif"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Tech Blog</h5>
        <p className="card-text">This full stack application uses javaScript, handlebars and sequelize to enable a user to add and remove "Tech Blog" posts using an individualized user account.</p>
        <a href="https://github.com/Cassiep1986/MVC-Tech-Blog" target="_blank" rel="noopener noreferrer"><Button variant="primary">Repo Link</Button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
          <a href="https://financial-buzz.herokuapp.com" target="_blank" rel="noopener noreferrer">
      <img src="./images/Financial_buzz.PNG" className="card-img-top w-100" alt="Snippit of Application"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Financial Buzz</h5>
        <p className="card-text">This full stack application uses javaScript, and sequelize to enable a user to create a budget to manage their monthly expenses with ease. Bootstrap and handlebars create a clean UI that displays submitted income and cost information. A remaining balance is provide to the user enabling additional future financial planning.</p>
        <a href="https://github.com/Cassiep1986/Financial-Buzz" target="_blank" rel="noopener noreferrer"><Button variant="primary">Repo Link</Button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
          <a href="https://drive.google.com/file/d/1AbplFeh8VbFrxcDBtWqqhl8wEHe2R8lF/view" target="_blank" rel="noopener noreferrer">
      <img src="./images/README_Demo_Video.gif" className="card-img-top w-100" alt="Application Demo Gif"/>
      </a>
      <div className="card-body">
        <h5 className="card-title">Professional Readme Generator</h5>
        <p className="card-text">This application uses node.js and inquirer to create a professional Readme markdown file..</p>
        <a href="https://github.com/Cassiep1986/Professional-README-Generator" target="_blank" rel="noopener noreferrer"><Button variant="primary">Repo Link</Button></a>
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
}


export default Portfolio;