import { v4 as uuidv4 } from 'uuid';
import { ContactItem } from '../ContactItem/ContactItem';
import s from './ContactList.module.css';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <ContactItem
              name={name}
              number={number}
              // onDeleteContact={onDeleteContact}
            />
            <button
              type="button"
              className={s.button}
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export { ContactList };
