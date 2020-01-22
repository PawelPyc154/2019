import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { style1, style1Type } from '../../../state/style/style1';

export interface FormWriteMessageProps {}

const FormWriteMessage: React.SFC<FormWriteMessageProps> = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),

    subject: Yup.string().oneOf(['red', 'green', 'blue'], 'Required'),
    message: Yup.string()
      .min(2, 'Too Short!')
      .max(4000, 'Too Long!')
      .required('Required'),
  });

  return (
    <Section styled={style1}>
      <h3>WRITE A MESSAGE</h3>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          subject: 'Subject',
          message: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, action) => {
          action.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
              <Field name="firstName" placeholder="First Name *" />
            </div>
            <div>
              {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
              <Field name="lastName" placeholder="Last Name *" />
            </div>
            <div>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field name="email" type="email" placeholder="Email *" />
            </div>
            <div>
              {errors.subject && touched.subject ? <div>{errors.subject}</div> : null}
              <Field as="select" name="subject">
                <option value="Subject">Subject</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>
            <div>
              {errors.message && touched.message ? <div>{errors.message}</div> : null}
              <Field as="textarea" name="message" placeholder="Message *" cols="30" rows="5" />
            </div>
            <button type="submit">SEND</button>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default FormWriteMessage;

const Section = styled.section<style1Type>`
  @import url('href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=latin-ext" rel="stylesheet"');

  padding: 8px;
  & > h3 {
    font-size: 2em;
    color: ${props => props.styled.spanColor};
    margin-bottom: 20px;
    padding: 5px 0;
  }
  & > form {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    & input {
      height: 50px;
      display: block;
      margin: 0px 0;
      font-size: 1.5em;
      border: none;
      padding: 5px;
      &::placeholder {
        color: black;
        opacity: 1;
      }
    }
    & button {
      margin: 0 auto;
      height: 50px;
      border: none;
      width: 135px;
      background-color: rgb(250, 250, 250);
      &:hover {
        background-color: rgb(236, 236, 236);
      }
    }
    & select {
      border: none;
      font-size: 1.5em;
      height: 50px;
      padding: 0;
    }

    & textarea {
      height: 100px;
      font-family: 'Montserrat', sans-serif;
      margin: 0 0;
      font-size: 1.5em;
      border: none;
      resize: none;
      overflow: auto;
      padding: 5px;
      &::placeholder {
        color: black;
        opacity: 1;
      }
    }
    & > div {
      color: red;
      & > {
        height: 13px;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    flex-basis: 830px;

    & form {
      display: flex;
      flex-direction: initial;
      flex-wrap: wrap;
      justify-content: space-between;
      & input {
        width: 391.5px;
      }
      & select {
        width: 391.5px;
        margin: 0px 0;
      }
      & textarea {
        width: 391.5px;
      }
      & button {
        margin: 10px 0 0 auto;
      }
    }
  }
`;
