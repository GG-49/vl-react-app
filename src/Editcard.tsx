import { Formik, Field, Form, ErrorMessage, validateYupSchema } from 'formik';

const EditCard = ({ setShowModal,
  userdetail,
  updateUser }: any) => {

  return (
    <div>
      <Formik
        initialValues={{
          userid: userdetail.id,
          firstname: userdetail.first_name,
          lastname: userdetail.last_name,
          email: userdetail.email,
          phonenumber: userdetail.phone_number
        }}

        validate={values => {
          const errors: any = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setShowModal(false);
            setSubmitting(false);
            console.log('EditCard - ', values);
            updateUser(values);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userid">User ID - </label>
              <input
                type="text"
                name="userid"
                className="bg-gray-300 mr-2 py-1 px-2 mb-1"
                // onChange={handleChange}
                // onBlur={handleBlur}
                value={values.userid}
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div>
              <label htmlFor="email">Email Address - </label>
              <input
                type="email"
                name="email"
                className="bg-gray-300 mr-2 py-1 px-2 mb-1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div>
              <label htmlFor="firstname">First Name - </label>
              <input
                type="text"
                name="firstname"
                className="bg-gray-300 mr-2 py-1 px-2 mb-1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
              />
              {errors.firstname && touched.firstname && errors.firstname}
            </div>
            <div>
              <label htmlFor="lastname">Last Name - </label>
              <input
                type="text"
                name="lastname"
                className="bg-gray-300 mr-2 py-1 px-2 mb-1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
              />
              {errors.lastname && touched.lastname && errors.lastname}
            </div>

            <div>
              <label htmlFor="phonenumber">Telephone - </label>
              <input
                type="text"
                name="phonenumber"
                className="bg-gray-300 mr-2 py-1 px-2 mb-1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phonenumber}
              />
              {errors.phonenumber && touched.phonenumber && errors.phonenumber}
            </div>

            <div className="footer">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>

          </form>
        )}
      </Formik>
    </div>
  );
};
export default EditCard;