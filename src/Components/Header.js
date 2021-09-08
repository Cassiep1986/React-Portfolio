import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header>

      <nav className="navbar navbar-expand-md topnav">
        <div className="container-fluid">
        <a class="navbar-brand" href="#"><img src="./images/name_img.PNG" alt="Cassandra Pacheco" width="" height=""/></a>
        <NavLink to="/" exact activeStyle={{color:"violet"}}>About Me</NavLink>

        <NavLink to="/portfolio"activeStyle={{color:"violet"}}>Portfolio</NavLink>

        <NavLink to="/contact"activeStyle={{color:"violet"}}>Contact Me</NavLink>

        <NavLink to="/resume"activeStyle={{color:"violet"}}>Resume</NavLink>
      </div>
      </nav>

    </header>
    
  );
}

export default Header





