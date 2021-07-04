import { Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from 'react';
import * as Yup from 'yup';
import { useCreatePostMutation } from "../../api";
import { InputField } from '../../components';
import { ICreatePostPayload } from "../../types";

const createPostInputSchema = Yup.object().shape({
  caption: Yup.string()
    .required('Required')
});

export default function Create() {
  const mutation = useCreatePostMutation();
  return (
    <Formik validationSchema={createPostInputSchema} validateOnMount initialValues={{ caption: '' } as ICreatePostPayload} onSubmit={(values, { setErrors, setValues }) => mutation.mutate(values, {
      onSuccess() {
        setValues({ caption: '' })
      }
    })}>
      {({ isSubmitting, isValid }) =>
        <Form className="Create flex fd-c">
          <InputField multiline rows={5} name="caption" placeholder="Caption for your post" label="Caption" />
          <Button disabled={!isSubmitting && !isValid} type="submit" variant="contained" color="primary" className={`Create-button fs-20 fw-700 mt-10`}>Create</Button>
        </Form>
      }
    </Formik>
  )
}
