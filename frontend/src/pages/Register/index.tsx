import { Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from 'react';
import { InputField } from '../../components';
import "./style.scss";

export default function Register() {
  return (
    <Formik initialValues={{ username: '', password: '', email: '' }} onSubmit={async (values, { setErrors }) => {
      console.log(123)
    }}>
      {({ isSubmitting }) =>
        <Form className="Register flex fd-c">
          <InputField name="username" placeholder="John Doe" label="Username" />
          <InputField name="email" placeholder="johndoe@gmail.com" label="Email" />
          <InputField name="password" placeholder="password" label="Password" type="password" />
          <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" className={`Register-button fs-20 fw-700 mt-10`}>Register</Button>
        </Form>
      }
    </Formik>
  )
}
