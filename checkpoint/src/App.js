import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

<header>
<h1>GMC FORM</h1>
  <ul class="navbar">
    <li><a href='#'>Home</a></li>
    <li><a href='#'>Form</a></li>
    <li><a href='#'>Contact</a></li>
  </ul>
</header>

<body>
<form>
<div class="form-group">
    <label>First name</label>
    <textarea  class="form-control"  id="exampleFormControlTextarea1" rows="3">Write your first name</textarea>
  </div>

  <div class="form-group">
    <label> Last name</label>
    <textarea class="form-control"  id="exampleFormControlTextarea1" rows="3">Write your Last name</textarea>
  </div>

  <div class='form-group'>
    <label>Email Adress</label>
    
<input  type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>

<div class='form-group'>
<label>Years Experience of Developing Web</label>
<br></br>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>More</option>
    </select>
</div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">your feedback!</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <button class="btn btn-primary">Submit</button>
</form>
</body>
    </div>
  );
}

export default App;
