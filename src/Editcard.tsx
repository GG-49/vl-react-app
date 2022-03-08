import { UserAddIcon } from '@heroicons/react/outline';
import { useFormik } from 'formik';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const EditCard = ({userId, eMail, firstName, lastName, phoneNumber}: any): JSX.Element => {
  // console.log(firstName)
  
  return <div> 


    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ 
        
        userid: userId,
        email: eMail, 
        firstname: firstName,
        lastname: lastName,
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
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
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
};

export default EditCard;












// function EditCard(props: any): JSX.Element {
//     const formik = useFormik({
//       initialValues: {
//         first_name: '',
//         last_name: '',
//         email: '',
//       },
//       onSubmit: values => {
//         alert(JSON.stringify(values, null, 2));
//         console.log('CCC ', values);
//       },
//     });

//     return (
//       <Formik> 
//       <Form onSubmit={formik.handleSubmit}>

//         <label htmlFor="firstName">First Name</label>
//         <input
//           id="firstName"
//           name="firstName"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.first_name} />

//         <label htmlFor="lastName">Last Name</label>
//         <input
//           id="lastName"
//           name="lastName"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.last_name} />

//         <label htmlFor="email">Email Address</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           onChange={formik.handleChange}
//           value={formik.values.email} />

//         <button type="submit">Submit</button>
    
//       </Form>
//       </Formik>
//     );
// }

// export default EditCard;
