import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import { Form, FormField, Btn, ErrorMessage } from './ContactForm.styled';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
    .required('Required')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name may contain only letters, apostrophe, dash and spaces!'),
    number: Yup.string()
    .required('Required')
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!')
});

export const ContactForm = ({ onSubmit }) => {
    return <Formik
        initialValues={{
            name: "",
            number: ""
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
            onSubmit({
                ...values,
                id: nanoid()
            });
            actions.resetForm();
        }}>
        <Form>
            <FormField>
                Name
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="span" />
            </FormField>
            <FormField>
                Number
                <Field name="number" type="tel" />
                <ErrorMessage name="number" component="span" />
            </FormField>
            <Btn type="submit">Add contact</Btn>
        </Form>
    </Formik>
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}