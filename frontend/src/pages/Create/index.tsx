import { Form, Formik } from "formik";
import React from 'react';
import * as Yup from 'yup';
import { useCreatePostMutation } from "../../api";
import { FormButton, InputField } from '../../components';
import { useRedirect } from "../../hooks";
import { ICreatePostPayload } from "../../types";
import "./style.scss";

const createPostInputSchema = Yup.object().shape({
  caption: Yup.string()
    .required('Required')
});

export default function Create() {
  const mutation = useCreatePostMutation();
  const currentUser = useRedirect(true);
  return (
    currentUser ? <Formik validationSchema={createPostInputSchema} validateOnMount initialValues={{ caption: '' } as ICreatePostPayload} onSubmit={(values, { setErrors, setValues }) => mutation.mutate(values, {
      onSuccess() {
        setValues({ caption: '' })
      }
    })}>
      {({ isSubmitting, isValid }) =>
        <Form className="Create flex fd-c">
          <InputField multiline rows={5} name="caption" placeholder="Caption for your post" label="Caption" />
          <FormButton disabled={!isSubmitting && !isValid} label={"Create"} />
        </Form>
      }
    </Formik> : null
  )
}
