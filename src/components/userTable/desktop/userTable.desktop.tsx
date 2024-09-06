import React from 'react';
import { STATUS } from '../../../store/slices/user/userSlice.constant';
import { useTableData } from '../shared/useTableData';
import './userTable.desktop.scss';

export const UserTableDesktop: React.FC = () => {
  const { status, error, users } = useTableData();

  if (status === STATUS.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === STATUS.FAILED) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: { id: React.Key; name: string; username: string; email: string; phone: string }) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
