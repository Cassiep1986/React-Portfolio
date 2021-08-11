function Aboutme() {
  return (
    <>
    <h1>About Me</h1>
      <img
        className="headshot mt-5"
        src="/images/Headshot.jpg"
        alt="Developer's Headshot"
      />

      <div >
        <section className="text">
          <p className = "aboutme">
            Hello, my name is Cassandra Pacheco and I am a full-stack web developer. Although new to web development,
            I have completed a full-stack coding bootcamp program with the
            University of Arizona learning the following languages: HTML, CSS,
            Javascript (including Node.JS), SQL. I also have experience with the
            following frameworks/libraries: React, Sequelize, Express, Inquirer, Mongodb,
            Bootstrap, Bulma, jQuery, and Material UI. 
          </p>
        </section>
      </div>
    </>
  );
}

export default Aboutme;
