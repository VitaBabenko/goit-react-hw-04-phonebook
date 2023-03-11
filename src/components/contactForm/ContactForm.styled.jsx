import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
    border: 2px solid black;
    padding: 15px;
    width: 400px;
`;

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 300px;
    margin-bottom: 25px;
`;

export const Btn = styled.button`
    display: block;
    width: 120px;
    height: 35px;
    cursor: pointer;
    background-color: white;
    border-radius: 3px;

    &:hover,
    &:focus {
        border: 3px solid black;
    }
`;

export const ErrorMessage = styled(FormikError)`
    color: red;
    width: 100%;
`