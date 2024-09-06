import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './services/api/fetchUsers';
import { AppDispatch } from './store/store';
import { UserTable } from './components/userTable/';



const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='App'>
      <UserTable />
    </div>
  );
};

export default App;