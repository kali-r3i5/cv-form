import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

import FormikField from "../formikfield/formikfield";

interface FormValues {
  name: string;
}

const initialValues: FormValues = {
  name: "",
};

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required"),
});

const ActionForm: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <FormikField name="name" label="Name" required />

              <Button
                variant="contained"
                color="primary"
                disabled={null}
                type="submit"
              >
                Primary
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ActionForm;
