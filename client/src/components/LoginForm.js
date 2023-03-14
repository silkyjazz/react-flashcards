import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { LOGIN_USER } from "../utils/mutation";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (error) {
      console.error('error from line 29 loginForm.js' + error)
    }

    try {
      
      const { data } = await login({
        variables: { ...formState },
      });
<<<<<<< HEAD
      const user = data.login.user.username
      Auth.login(data.login.token);
      window.location.assign(`/${user}/decks`)
      
=======

      const user = data.login.user.username
      Auth.login(data.login.token);
      window.location.assign(`/${user}/decks`)
>>>>>>> d43278e1d4e5ea47a4f92f1348345033cd993604
    } catch (error) {
      console.error(error);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>

        <Form.Group>
          <Form.Label className="modal-text" htmlFor="email">
            Email
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={formState.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className="modal-text" htmlFor="password">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={formState.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(formState.email && formState.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
