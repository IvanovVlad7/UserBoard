import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './features/userSlice';
import { AppDispatch } from './store/store';
import UserTable from './components/userTable';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <UserTable />
    </div>
  );
};

export default App;