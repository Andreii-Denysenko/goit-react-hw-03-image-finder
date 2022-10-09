import {Formik , Form, Field} from 'formik';



export const  Searchbar = ({onSubmit}) => {
    const handleSubmit =  (values, actions) => {
         onSubmit(values);
        actions.resetForm();
      };
    
    return (
        <Formik
         initialValues={{ title: '', link: ''}} 
         onSubmit={handleSubmit}
            >
            <Form>
                <label>
                    Opisanie 
                <Field name="title" type="text"></Field>
                </label>
                <br/>
                <label>
                    sulka
                <Field name="link" type="text"></Field>
                </label>
            <button type="submit">Add material</button>
            </Form>
        </Formik>
    //     <header class="searchbar">
    //     <form class="form">
    //       <button type="submit" class="button">
    //         <span class="button-label">Search</span>
    //       </button>
      
    //       <inputp
    //         class="input"
    //         type="text"
    //         autocomplete="off"
    //         autofocus
    //         placeholder="Search images and photos"
    //       />
    //     </form>
    //   </header>
    );
};