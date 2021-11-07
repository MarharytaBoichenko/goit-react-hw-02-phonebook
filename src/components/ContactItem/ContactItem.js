import s from './ContactItem.module.css';
const ContactItem = ({ id, name, number }) => {
  return (
    <div className={s.contactItem}>
      <p className={s.contactName}> {name}:</p>{' '}
      <p className={s.contactNumber}> {number}</p>
    </div>
  );
};
export { ContactItem };
