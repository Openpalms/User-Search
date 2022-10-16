import s from './Finder.module.css';

const Finder = (props) => {
  return (
    <div>
      <div className={s.wrapper}>
        <input
          type="search"
          placeholder="Search for more users..."
          className={s.search}
          onChange={(e) => {
            props.setQuery(e.target.value);
          }}
        />
        <span></span>
      </div>
    </div>
  );
};

export default Finder;
