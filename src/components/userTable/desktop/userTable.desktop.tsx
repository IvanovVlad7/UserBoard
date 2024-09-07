import React, { useState } from 'react';
import { STATUS } from '../../../store/slices/user/userSlice.constant';
import { useTableData } from '../shared/useTableData';
import './userTable.desktop.scss';
import { Loader } from '../../loader/loader';
import { FilterInput } from '../../filterInput';
import { ErrorMessage } from '../../errorMessage/errorMessage';

export const UserTableDesktop: React.FC = () => {
  const { status, error, users } = useTableData();

  const [filterName, setFilterName] = useState('');
  const [filterUsername, setFilterUsername] = useState('');
  const [filterEmail, setFilterEmail] = useState('');
  const [filterPhone, setFilterPhone] = useState('');

  if (status === STATUS.LOADING) {
    return <Loader/>; 
  }

  if (status === STATUS.FAILED) {
    return <ErrorMessage message={error || 'An unknown error occurred'} />
  }
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return <>{text}</>; 

    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    // TODO: think about this *
    return (
      <>
        {parts.map((part, index) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={index} className="highlight">{part}</mark> 
          ) : (
            part 
          )
        )}
      </>
    );
  };
  

  const filteredUsers = users.filter(({ name, username, email, phone }) => {
    const matchesName = name.toLowerCase().includes(filterName.toLowerCase());
    const matchesUsername = username.toLowerCase().includes(filterUsername.toLowerCase());
    const matchesEmail = email.toLowerCase().includes(filterEmail.toLowerCase());
    const matchesPhone = phone.includes(filterPhone);

    return matchesName && matchesUsername && matchesEmail && matchesPhone;
  });

  return (
    <div className="user-table-container">
      <div className="filter-container">
        <FilterInput
          placeholder="Filter by name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
        <FilterInput
          placeholder="Filter by username"
          value={filterUsername}
          onChange={(e) => setFilterUsername(e.target.value)}
        />
        <FilterInput
          placeholder="Filter by email"
          value={filterEmail}
          onChange={(e) => setFilterEmail(e.target.value)}
        />
        <FilterInput
          placeholder="Filter by phone"
          value={filterPhone}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setFilterPhone(e.target.value)}
        />
      </div>

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
            {filteredUsers.length ? (
              filteredUsers.map(({ id, name, username, email, phone }) => (
               <tr key={id}>
                  <td>{highlightText(name, filterName)}</td> 
                  <td>{highlightText(username, filterUsername)}</td>
                  <td>{highlightText(email, filterEmail)}</td>
                  <td>{highlightText(phone, filterPhone)}</td>
               </tr>
             ))
            ) : (
            <tr>
               <td colSpan={4} className="no-results">No results found</td>
            </tr>
              )}
          </tbody>
      </table>
    </div>
  );
};
