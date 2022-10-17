import User from './Users';

const UserContainer = (props) => {
  return props.users
    .filter((user) =>
      user.name.toLowerCase().includes(props.query.toLowerCase())
    )
    .map((user, index) => (
      <User
        key={index}
        setPopup={props.setPopup}
        refContainer={props.refContainer}
        setActive={props.setActive}
        username={user.name}
        phone={user.phone}
        email={user.email}
        adress={user.adress}
        position_name={user.position_name}
        department={user.department}
        hire_date={user.hire_date}
      />
    ));
};

export default UserContainer;
