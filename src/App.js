
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio of Kyle McWilliams</h1>
        <div>

          <a href="#aboutme">About Me</a>

          <a href="#container">Work</a>

          <a href="#content">Contact Me </a>
        </div>
      </header>
      <div class="main">

        <aside id="aboutme" class="aboutme">
          <h2>About Me</h2>
          <p>Ambassador to the North Pole, was raised by wolves,
            world class pasta maker, once met Tiger Woods at an Applebees.
            Lorem ipsum and all that...</p>
        </aside>


        <h2> Work</h2>
        <section id="container" class="container">
          <div class="box">
            <h2> <a href="https://kmcwilliams1.github.io/mini-landing-page/">My First Landing Page</a></h2>
          </div>
          <div class="box quiz">
            <h2><a href=" https://kmcwilliams1.github.io/QuizHomework/">Quiz Game</a></h2>
          </div>
          <div class="box weather">
            <h2><a href="https://kmcwilliams1.github.io/weatherHomework/">Weather App</a></h2>
          </div>
          <div class="box planner">
            <h2> <a href="https://kmcwilliams1.github.io/calendarHomework/">Daily Planner</a></h2>
          </div>
          <div class="box vernac-u-learn">
            <h2><a href="https://zd092718.github.io/vernac-u-learn/">Vernac-u-learn</a></h2>
          </div>
          <div class="box noteTaker">
            <h2> <a href="https://floating-bayou-68435.herokuapp.com/">Note Taker</a></h2>
          </div>
          <div class="box htmlTeamBuilder">
            <h2> <a href="https://kmcwilliams1.github.io/HTMLTeamBuilder/">HTMLTeamBuilder</a></h2>
          </div>
          <div class="box password">
            <h2> <a href="https://kmcwilliams1.github.io/PasswordHomework/">Password Generator</a></h2>
          </div>
          <div class="box pawpals">
            <h2> <a href="https://kmcwilliams1.github.io/PawPals/">PawPals</a></h2>
          </div>
        </section>
      </div>

      <footer>
        <div>
          <div id="content" class="content">
            <h2><a href="mailto:kmac52694@gmail.com">My email</a></h2>
            <h2><a href="https://github.com/kmcwilliams1">Github</a></h2>
            <h2><a href="https://www.linkedin.com/in/kyle-mcwilliams-b87573139/">Linkedin</a></h2>
            <h2><a href="./Resume.pdf">My resume</a></h2>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
