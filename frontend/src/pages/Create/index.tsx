import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useCreatePostMutation } from "../../api";
import { FormButton, InputField, Upload } from '../../components';
import { API_ENDPOINT, JWT_TOKEN_LS_KEY } from "../../constants";
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
  const [file, setFile] = useState<File | null>(null)
  return (
    currentUser ? <Formik validationSchema={createPostInputSchema} validateOnMount initialValues={{ caption: '' } as ICreatePostPayload} onSubmit={(values, { setErrors, setValues }) => mutation.mutate(values, {
      async onSuccess({ data }) {
        setValues({ caption: '' });
        if (file) {
          const formData = new FormData();
          formData.append('file', file)
          try {
            const token = localStorage.getItem(JWT_TOKEN_LS_KEY);
            const response = await axios.post<{ data: { filePath: string } }>(`${API_ENDPOINT}/upload`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                authorization: `Bearer ${token}`
              }
            })
            await axios.put(`${API_ENDPOINT}/posts/${data.data.id}`, {
              data: {
                image_url: response.data.data.filePath
              }
            }, {
              headers: {
                authorization: `Bearer ${token}`
              }
            })
            setFile(null);
          } catch (err) {
            console.log("An error occurred")
          }
        }
      }
    })}>
      {({ isSubmitting, isValid }) =>
        <Form className="Create flex fd-c">
          <InputField multiline rows={5} name="caption" placeholder="Caption for your post" label="Caption" />
          <Upload onLoad={(result, file) => {
            setFile(file)
          }} accept={['.jpg', '.png']} postRead={() => { }} />
          <FormButton disabled={!isSubmitting && !isValid} label={"Create"} />
        </Form>
      }
    </Formik> : null
  )
}
