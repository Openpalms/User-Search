import './App.css';
import Finder from './components/Finder/Finder';
import UserContainer from './components/Users/UsersContainer';
import { useState, useRef, useEffect } from 'react';
import Popup from './components/Popup/Popup';

function App() {
  const [query, setQuery] = useState('');
  const [popupActive, setPopupActive] = useState(false);
  const refContainer = useRef();
  const [popup, setPopup] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000?term=${query}`);
        const json = await response.json();
        setUsers(json.splice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <Finder query={query} setQuery={setQuery} />
      <div className="cards">
        <UserContainer
          users={users}
          setPopup={setPopup}
          refContainer={refContainer}
          query={query}
          setActive={setPopupActive}
        />
      </div>
      <Popup
        active={popupActive}
        setPopupActive={setPopupActive}
        popup={popup}
      />
    </>
  );
}

export default App;
