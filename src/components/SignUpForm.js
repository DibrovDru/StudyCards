import React from 'react';
import "./SignUp_classes/style_sign_up.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignUpForm = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '', rp_password:'' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if(values.rp_password !== values.password) {
            errors.rp_password = 'Doesn\'match';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" className="email_sign_up" placeholder="Enter email"/>
          <ErrorMessage name="email" component="div" className="error_email"/>
          <Field type="password" name="password" className="password_sign_up" placeholder="Enter password"/>
          <ErrorMessage name="password" component="div" />
          <Field type="rp_password" name="rp_password" className="rp_password_form" placeholder="Repeat password"/>
          <ErrorMessage name="rp_password" component="div" className="error_pswd"/>

          <button type="submit" disabled={isSubmitting} className="sign_up_button">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignUpForm;