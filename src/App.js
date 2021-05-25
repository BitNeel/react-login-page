import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleSubmit = e=>{
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input type='email'
            placeholder="Enter Username"
            name="uname"
            required>
      </input>
      <input type="password"
            placeholder="Enter Password"
            name="pswd"
            required>
      </input>
      <button type='submit'>Login</button>
      </form>
      
    </div>
  );
}

export default App;
