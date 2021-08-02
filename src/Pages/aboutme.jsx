function Aboutme() {
  return (
    <>
    <h1>About Me</h1>
      <img
        className="headshot mt-5"
        src="/images/Headshot.jpg"
        alt="Picture of Developer"
      />

      <div className="">
        <a name="Aboutme">
          <h1></h1>
        </a>
        <section className="text">
          <p>
            Hello, my name is Cassandra Pacheco and I am a (soon to be)
            certified full-stack web developer. Although new to web development,
            I (will soon) have completed a full-stack program with the
            University of Arizona learning the following languages: HTML, CSS,
            Javascript (including Node.JS), SQL. I also have experience with the
            following frameworks/libraries: React, Sequelize, Express, Inquirer,
            Bootstrap, Bulma, jQuery,{" "}
          </p>

          <p>
            In my off time I like to spend time with family. I also enjoy
            baking, crafting and watching documentaries on Netflix. Please see
            my work below as an example of some of my new learned skills.
          </p>
        </section>
      </div>
    </>
  );
}

export default Aboutme;
