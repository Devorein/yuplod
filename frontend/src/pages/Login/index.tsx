import { Form, Formik } from "formik";
import React from 'react';
import * as Yup from 'yup';
import { useLoginMutation } from "../../api";
import { FormButton, InputField } from '../../components';
import { useAuthSuccess, useRedirect } from "../../hooks";
import { ILoginAuthPayload } from "../../types";
import { validatePassword } from "../../utils";
import "./style.scss";

const loginInputSchema = Yup.object().shape({
  password: Yup.string().max(50, 'Too Long!').required('Required').test('Password validation', 'Invalid password', (password) => validatePassword(password ?? '')),
});

export default function Login() {
  const mutation = useLoginMutation();
  const onAuthSuccess = useAuthSuccess();
  const currentUser = useRedirect(false);
  return (
    !currentUser ? <Formik validationSchema={loginInputSchema} validateOnMount initialValues={{ username: '', password: '', email: '' } as ILoginAuthPayload} onSubmit={(values, { setErrors }) => mutation.mutate(values, {
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
          <FormButton disabled={!isSubmitting && !isValid} label={"Login"} />
        </Form>
      }
    </Formik> : null
  )
}
