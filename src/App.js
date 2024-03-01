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

  return (
    <div className="Form">
      <h1>Gina's User Information Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          What is your first name?:
          <input
            type="text"
            name="firstName"
            value={formQues.firstName}
            onChange={handleChange}
            required
          // the required makes it so that this part of the form must be answered before the user can submit. 
          // The br tag below is a simple way to create a line break.
          />
        </label>
        <br />


        <label>
          What do you want as your new username?:
          <input
            type="text"
            name="newUserName"
            value={formQues.newUserName}
            onChange={handleChange}
            required
          />
        </label>
        <br />


        <label>
          What is your favourite colour?:
          <input
            type="text"
            name="favouriteColour"
            value={formQues.favouriteColour}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          What is your favourite number?:
          <input
            type="number"
            name="favouriteNumber"
            value={formQues.favouriteNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Please write a short paragraph about one of your daily activities:
          <textarea
            // using text area instead of type="text". This will allow more space to write a para?. input not needed above.

            name="paragraphOnDailyActivity"
            value={formQues.paragraphOnDailyActivity}
            onChange={handleChange}
            required
          />
        </label>
        <br />



        <button type="submit">Submit</button>
      </form>




      <div>
        <h2>Submitted Answers:</h2>
        <pre>{JSON.stringify(formQues, null, 2)}</pre>   
      </div>
    </div >
  );
}

// JSON.stringify is a JavaScript method that converts a JavaScript object or value to a JSON string.
// NOTE- look into what the sections of this line mean in more depth...
// the submitted answers section is not working as I want it to... But all submitted answers do show in Inspect console.



export default App;
