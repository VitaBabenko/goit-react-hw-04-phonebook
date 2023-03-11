import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import { ContactListItem } from '../contactListItem/ContactListItem';

export const ContactList = ({ contacts, onDelete }) => {
    return <ul>
        {contacts.map(contact => {
            return <li key={nanoid()}>
                <ContactListItem contact={contact} onDelete={onDelete} />
            </li>
        })}
    </ul>
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.string.isRequired
    })).isRequired,
    onDelete: PropTypes.func.isRequired
}