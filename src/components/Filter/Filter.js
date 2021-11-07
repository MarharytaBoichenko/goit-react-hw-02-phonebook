import s from './Filter.module.css';
const Filter = ({ value, onChange }) => (
  <>
    <label className={s.inputLabel}>
      <span className={s.label}>Find contacts by name</span>
      <input
        onChange={onChange}
        type="text"
        name="filter"
        value={value}
        className={s.filterInput}
      ></input>
    </label>
  </>
);

export { Filter };
