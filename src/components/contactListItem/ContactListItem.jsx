import PropTypes from "prop-types";
import { List, Btn } from './ContactListItem.styled';

export const ContactListItem = ({ contact: {id, name, number}, onDelete }) => {
    return <List>
        <p>{name}: {number}</p>
        <Btn type="button" onClick={() => { onDelete(id) }}>Delete</Btn>
    </List>
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired
}