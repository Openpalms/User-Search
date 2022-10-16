import s from './Popup.module.css';

const Popup = (props) => {
  window.onkeydown = function (event) {
    if (event.keyCode === 27) {
      props.setPopupActive(false);
    }
  };
  return (
    <div
      className={props.active ? s.active : s.modal}
      onClick={() => props.setPopupActive(false)}
    >
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <div
          className={s.cross}
          onClick={() => props.setPopupActive(false)}
        ></div>
        <h1>{props.popup === undefined ? '' : props.popup.username}</h1>
        <div>
          <span className={s.wrap}>
            <p className={s.tag}>Телефон:</p>
            <p className={s.data}>
              {props.popup === undefined ? '' : props.popup.phone}
            </p>
          </span>
          <span className={s.wrap}>
            <p className={s.tag}>Почта:</p>
            <p className={s.data}>
              {props.popup === undefined ? '' : props.popup.email}
            </p>
          </span>
          <span className={s.wrap}>
            <p className={s.tag}>Дата:</p>
            <p className={s.data}>
              {props.popup === undefined ? '' : props.popup.hire_date}
            </p>
          </span>
          <span className={s.wrap}>
            <p className={s.tag}>Должность:</p>
            <p className={s.data}>
              {props.popup === undefined ? '' : props.popup.position_name}
            </p>
          </span>
          <span className={s.wrap}>
            <p className={s.tag}>подразделение:</p>
            <p className={s.data}>
              {props.popup === undefined ? '' : props.popup.department}
            </p>
          </span>
        </div>
        <div>
          <h5>Дополнительная информация:</h5>
          <p className={s.additional}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat
            malesuada eleifend. Suspendisse accumsan leo eget vestibulum
            vestibulum. Fusce eu velit libero. Curabitur pharetra tellus vitae
            arcu tincidunt, in tempus mauris ultricies. Duis tempus mauris
            sollicitudin, convallis risus quis, lobortis arcu. Quisque ornare
            molestie lacus eu fermentum. In efficitur lobortis velit quis
            varius. Morbi at dolor feugiat, scelerisque massa ut, sollicitudin
            nunc. Duis vehicula, felis et accumsan rutrum, nisi mi luctus
            mauris, quis lobortis nisl quam a dolor. Curabitur blandit risus vel
            lorem convallis malesuada. Praesent malesuada, nibh eget congue
            condimentum, orci ante volutpat mauris, ac tempus risus diam posuere
            libero.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Popup;
