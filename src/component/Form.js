import React, { useState } from "react";


function Form() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const[submit , setSubmit]= useState(false);
  const [valid, setValid ]= useState(false)

  const handleFirstNameInput = (event) => {
    setValues({ ...values,firstname: event.target.value,
    });
  };
  const handlelastNameInput = (event) => {
    setValues({ ...values,lastname: event.target.value,
    });
  };
   const handleEmailInput = (event) => {
    setValues({ ...values,email: event.target.value,
    });
  };

  const handlePasswordInput = (event) => {
    setValues({ ...values, password: event.target.value,
    });
  };

  const handleSubmit = (event) => {
      event.preventDeafult()
      if (values.firstname && values.lastname  && values.email && values.password) {
        setValid(true)
    }

    setSubmit(true);

  }

  return (
    <div>
      <div className="container_1">
        <form className="form" onSubmit={handleSubmit} >
     { submit &&  valid ? <div className="success-msg">Your form is Submited. </div> :null }
          <input
            type="text"
            onChange={handleFirstNameInput}
            className="form-field"
            value={values.firstname}
            placeholder="First Name"
            name=" firstName"
            
          /> <br />
         { submit && !values.firstname ? <span>Please enter first name.</span> : null}
          <input
            type="text"
            onChange={handlelastNameInput}
            className="form-field"
            value={values.lastname}
            placeholder="Last Name"
            name="lastName"
          /> <br />
         { submit && !values.lastname ? <span>Please enter last name.</span> : null}


          <input
            type="email"
            onChange={handleEmailInput}

            className="form-field"
            value={values.email}
            placeholder="Email"
            name="email"
          /> <br />
        { submit && !values.email ? <span>Please enter your email.</span> : null}


          <input
            type="password"
            onChange={handlePasswordInput}

            className="form-field"
            value={values.password}
            placeholder="password"
            name="password"
          />  <br />
             { submit && !values.password ? <span>Please enter your password.</span> : null}


          
          <br />
          <br />
          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
