import { Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from 'react';
import * as Yup from 'yup';
import useRegisterMutation from "../../api/mutations/useRegister";
import { InputField } from '../../components';
import { IUserCreate } from "../../types";
import { validatePassword } from "../../utils";
import "./style.scss";

const registerSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  last_name: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  password: Yup.string().max(50, 'Too Long!').required('Required').test('Password validation', 'Invalid password', (password) => validatePassword(password ?? '')),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function Register() {
  const mutation = useRegisterMutation();
  return (
    <Formik validationSchema={registerSchema} validateOnMount initialValues={{ username: '', password: '', email: '', first_name: '', last_name: '' } as IUserCreate} onSubmit={async (values, { setErrors }) => {
      const response = mutation.mutate(values);
      console.log(response)
    }}>
      {({ isSubmitting, isValid }) =>
        <Form className="Register flex fd-c">
          <div className="flex">
            <InputField className="flex-1" name="first_name" placeholder="John" label="First Name" />
            <InputField className="flex-1" name="last_name" placeholder="Doe" label="Last Name" />
          </div>
          <InputField name="username" placeholder="johndoe" label="Username" />
          <InputField name="email" placeholder="johndoe@gmail.com" label="Email" />
          <InputField name="password" placeholder="password" label="Password" type="password" />
          <Button disabled={isSubmitting || !isValid} type="submit" variant="contained" color="primary" className={`Register-button fs-20 fw-700 mt-10`}>Register</Button>
        </Form>
      }
    </Formik>
  )
}
