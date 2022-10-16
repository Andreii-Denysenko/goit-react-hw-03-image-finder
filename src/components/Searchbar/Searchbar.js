import {Formik , Form, Field, } from 'formik';


export default function SearchBar({ onSubmit }) {
    const handleSubmit = async (values, actions) => {
      await onSubmit(values);
  
      actions.setSubmitting(false);
      // actions.resetForm();
    };
    
    return (
        <Formik
         initialValues={{ searchQuery:''}} 
         onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
        <Form>
        <button type="submit" disabled={isSubmitting}>
         <span className='button-label'>Search</span>
      </button>
      <Field 
      name="searchQuery"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"/>
        </Form>
            )}
        </Formik>
    );
};