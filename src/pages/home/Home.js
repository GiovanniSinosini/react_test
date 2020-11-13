import React from 'react';

const Home = () => <h1>Home</h1>;

return (
    <>
      <h1 className="Nome"> Login</h1>
      <p>Fill the fields to continue</p>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="Login">
          <div className="Login-Group">
            <Field name="email" className="Login-Field" />
            <ErrorMessage
              component="span"
              name="email"
              className="Login-Error"
            ></ErrorMessage>
          </div>
          <div className="Login-Group">
            <Field name="password" className="Login-Field" />
            <ErrorMessage
              component="span"
              name="password"
              className="Login-Error"
            ></ErrorMessage>
          </div>
          <button className="Login-Btn" type="submit">
            Login
          </button>
          <button className="Register-Btn" type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );

export default Home;
