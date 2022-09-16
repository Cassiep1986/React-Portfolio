function Footer() {
  return (
    <footer>
        <nav className="bottomnav">
        <div className="container-fluid">

          <a href="tel:6232164385"> <img src = "/images/icons/smartphone.png" alt = "Smartphone Icon" className ="icons"/></a>

          <a href="mailto:ckdev404@gmail.com"><img src = "/images/icons/message.png" alt = "Email Icon" className = "icons"/></a>

          
          <a 
            href="https://github.com/Cassiep1986"
            target="_blank"
            rel="noopener noreferrer"><img src = "/images/icons/github.png" alt="Github Icon" className = "icons"/>
          </a>

          <a href="https://www.linkedin.com/in/cassandra-pacheco-367ab376" target="_blank" rel="noopener noreferrer"><img src = "/images/icons/linkedin.png" alt = "Linkedin Icon" className = "icons"/>
          </a>

        </div>
        </nav>

    <div className = "text-center"> Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </footer>
  );
}


export default Footer