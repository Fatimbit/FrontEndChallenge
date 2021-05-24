
import './App.css';

function App() {
  return (
    <div className="App">


     <div class="split left">
       <div class="centered">
       <img class="backgroundimage" src= "./backdrop.jpg"></img>
       
       <img class="logo" src="./outstem_logo_icon.png"></img>
       </div>
     </div>

    <div class="split right">
      <h3>
        Sign up to begin your adventure
      </h3>
      <p class="texts">
        Already a member? <a class="links" href="">Login instead</a>
      </p>


      <button class="button button1">Continue with Google</button>
      <p class="signup">
      ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯  or sign up with email ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
      </p>

      <div class="texts">
      Email <br></br><input type="email" name="email" size="57" ></input><br></br>
      Password (min. 8 characters) <br></br><input type="password" name="password" size="57"></input><br></br>
        </div>

      <input type="checkbox" id="checkbox1" name="checkbox1" value="1"></input>
      <label for="checkbox1" class="texts"> I agree to the <a class="links" href="">Terms of Service</a> and <a class="links" href="">Privacy Policy</a> </label><br></br>

      <br></br>
      <button class="button button2">Get Started</button>

      
    </div>


    </div>
  );
}

export default App;
