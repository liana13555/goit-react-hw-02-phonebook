import PropTypes from 'prop-types';

export default function ContactList({ contacts }) {   
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id} name={contact.name} number={contact.number}>{contact.name}: {contact.number}</li>
            ))}

        </ul>            
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
}