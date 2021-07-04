import { Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from 'react';
import * as Yup from 'yup';
import useLoginMutation from "../../api/mutations/useLogin";
import { InputField } from '../../components';
import { useAuthSuccess } from "../../hooks";
import { ILoginInput } from "../../types";
import { validatePassword } from "../../utils";
import "./style.scss";

const loginInputSchema = Yup.object().shape({
  password: Yup.string().max(50, 'Too Long!').required('Required').test('Password validation', 'Invalid password', (password) => validatePassword(password ?? '')),
});

export default function Login() {
  const mutation = useLoginMutation();
  const onAuthSuccess = useAuthSuccess();
  return (
    <Formik validationSchema={loginInputSchema} validateOnMount initialValues={{ username: '', password: '', email: '' } as ILoginInput} onSubmit={(values, { setErrors }) => mutation.mutate(values, {
      onSuccess({ data }) {
        if (data.status === 'success') {
          onAuthSuccess(data.data)
        }
      }
    })}>
      {({ isSubmitting, isValid }) =>
        <Form className="Login flex fd-c">
          <InputField name="username" placeholder="johndoe" label="Username" />
          <InputField name="email" placeholder="johndoe@gmail.com" label="Email" />
          <InputField name="password" placeholder="password" label="Password" type="password" />
          <Button disabled={!isSubmitting && !isValid} type="submit" variant="contained" color="primary" className={`Login-button fs-20 fw-700 mt-10`}>Login</Button>
        </Form>
      }
    </Formik>
  )
}
