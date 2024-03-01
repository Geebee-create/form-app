import React, { useState } from 'react';
import './App.css';

function App() {
  // below creates an array that will hold the list of tasks for the todo list. 
  // The variable is tasks. The useState hook is used. 
  const [formQues, setFormQues] = useState({
firstName: "",
newUserName: "",
favouriteColour: "",
favouriteNumber: "",
paragraphOnDailyActivity: "",
});

const handleSubmit = (e) => {
  e.preventDefault();
// this should display the data underneath the form (it's handling the submitted data).
  console.log('Submitted Data:', formQues);
  //above line should clear the data?
  setFormQues({
    firstName: "",
newUserName: "",
favouriteColour: "",
favouriteNumber: "",
paragraphOnDailyActivity: "",
});
};

const handleChange = (e) => {
  const { name, value } = e.target;
setFormQues({
  ...formQues,
  [name]: value,
});
};



}

export default App;
