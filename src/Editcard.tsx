import { UserAddIcon } from '@heroicons/react/outline';
import { useFormik } from 'formik';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const EditCard = ({setShowModal, userId,  firstName, lastName, eMail, phoneNumber, user}: any): JSX.Element => {
  // console.log(firstName)
  
  return <div> 


    {/* <h1>Anywhere in your app!</h1> */}
    <Formik
      initialValues={{ 
        userid: userId,
        firstname: firstName,
        lastname: lastName,
        email: eMail, 
        phonenumber: phoneNumber
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
        user.lastName='XXX'

        setTimeout(() => { 
          alert(JSON.stringify(values, null, 2));
          setShowModal(false);
          setSubmitting(false);
        }, 400);
// Now to use userUpdate to "file" the changes
        console.log('EditC values ', values)

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
              name="lastname"
              className="bg-gray-300 mr-2 py-1 px-2 mb-1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phonenumber}
            />
            {errors.phonenumber && touched.phonenumber && errors.phonenumber}
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>

              {/* <div className="footer">
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div> */}



        </form>
      )}
    </Formik>
  </div>
};
export default EditCard;
