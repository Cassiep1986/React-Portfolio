import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1 id="name">Cassandra Pacheco</h1>

      <nav className="topnav">

        <NavLink to="/" exact activeStyle={{color:"violet"}}>About Me</NavLink>

        <NavLink to="/portfolio"activeStyle={{color:"violet"}}>Portfolio</NavLink>

        <NavLink to="/contact"activeStyle={{color:"violet"}}>Contact Me</NavLink>

        <NavLink to="/resume"activeStyle={{color:"violet"}}>Resume</NavLink>
      </nav>

    </header>
    
  );
}

export default Header





