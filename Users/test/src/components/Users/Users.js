import s from './Users.module.css';

const User = (props) => {
  return (
    <div
      ref={props.refContainer}
      onClick={() => {
        props.setActive(true);
        props.setPopup(
          (props.refContainer.current = {
            email: props.email,
            username: props.username,
            phone: props.phone,
            hire_date: props.hire_date,
            position_name: props.position_name,
            department: props.department,
          })
        );
      }}
    >
      <div className="card">
        <div className={s.card}>
          <h1 className={s.username}>{props.username}</h1>
          <h3 className={s.phone}>
            <img
              className={s.phoneimg}
              src="https://img.icons8.com/material-rounded/344/phone--v1.png"
              alt="phone logo"
            />
            {props.phone}
          </h3>
          <h5 className={s.mail}>
            <img
              className={s.mailimg}
              src="https://img.icons8.com/ios/344/apple-mail.png"
              alt="phone logo"
            />
            {props.email}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default User;
