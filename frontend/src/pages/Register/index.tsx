import { Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from 'react';
import useRegisterMutation from "../../api/mutations/useRegister";
import { InputField } from '../../components';
import { IUserCreate } from "../../types";
import "./style.scss";

export default function Register() {
  const mutation = useRegisterMutation();
  return (
    <Formik initialValues={{ username: '', password: '', email: '' } as IUserCreate} onSubmit={async (values, { setErrors }) => {
      const response = mutation.mutate(values);
      console.log(response)
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
