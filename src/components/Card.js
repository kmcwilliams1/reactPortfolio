// We have to first import `useState` with React in order to take advantage of the hook
import '../App.css'

function Card() {
  // const projects = [{text: 'https://kmcwilliams1.github.io/mini-landing-page/', photo:"./images/Daily-planner.jpg"}, {text: 'https://kmcwilliams1.github.io/weatherHomework/', photo:"../images/Daily-planner.jpg"}, {text: 'https://kmcwilliams1.github.io/calendarHomework/', photo:"../images/Daily-planner.jpg"},{text: 'https://zd092718.github.io/vernac-u-learn/', photo:"../images/Daily-planner.jpg"}, 
  // {text: 'https://kmcwilliams1.github.io/QuizHomework/', photo:"../images/Daily-planner.jpg"},{text: 'https://floating-bayou-68435.herokuapp.com/', photo:"../images/Daily-planner.jpg"}, {text: 'https://kmcwilliams1.github.io/HTMLTeamBuilder/', photo:"../images/Daily-planner.jpg"}, {text: 'https//kmcwilliams1.github.io/PasswordHomework/', photo:"../images/Daily-planner.jpg"}];
  return (
    <section >
      <div id="container" className="container">
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
      </div>
    </section>
  );
}



// function Card() {
//   const [projects] = useState(['https://kmcwilliams1.github.io/mini-landing-page/', 'https://kmcwilliams1.github.io/weatherHomework/', 'https://kmcwilliams1.github.io/calendarHomework/', 'https://zd092718.github.io/vernac-u-learn/', 'https://kmcwilliams1.github.io/QuizHomework/', 'https://floating-bayou-68435.herokuapp.com/', 'https://kmcwilliams1.github.io/HTMLTeamBuilder/', 'https://kmcwilliams1.github.io/PasswordHomework/',]);
//   return (
//     <section >
//       <div id="container" className="container">
//         {projects.map((project) => (
//           <div className="box">
//             {project}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default Card;