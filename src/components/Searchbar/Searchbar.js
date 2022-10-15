import {Formik , Form, } from 'formik';



export default function SearchBar ({ onSubmit }) {
    const handleSubmit = async (values, actions) => {
      await onSubmit(values);
  
      actions.setSubmitting(false);
      // actions.resetForm();
    };
    
    return (
        <Formik
         initialValues={{ searchQuery: ''}} 
         onSubmit={handleSubmit}>
            <Form>
            <button type="submit" className='button'>
             <span className='button-label'>Search</span>
          </button>
           <input
            name='searchQuery'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
            </Form>
        </Formik>
    );
};