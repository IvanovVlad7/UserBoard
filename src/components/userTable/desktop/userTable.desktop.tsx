import React, { useEffect, useMemo, useState } from 'react';
import { STATUS } from '../../../store/slices/user/userSlice.constant';
import { useTableData } from '../shared/useTableData';
import './userTable.desktop.scss';
import { Loader } from '../../loader/loader';
import { FilterInput } from '../../filterInput/desktop';
import { ErrorMessage } from '../../errorMessage/errorMessage';
import { debounceAmount, Placeholders, TableColumns } from '../shared/userTable.constants';
import { highlightText } from '../shared/userTable.utils';
import { FaTimesCircle } from 'react-icons/fa';
import _ from "lodash";

export const UserTableDesktop: React.FC = () => {
  const { status, error, users } = useTableData();

  const [filterName, setFilterName] = useState('');
  const [filterUsername, setFilterUsername] = useState('');
  const [filterEmail, setFilterEmail] = useState('');
  const [filterPhone, setFilterPhone] = useState('');
  const [isShouldBeCleared, setIsShouldBeCleared] = useState(false);

  const isFilterAdded = filterName || filterUsername || filterEmail || filterPhone;
  
  const filteredUsers = useMemo(() => {
    return users.filter(({ name, username, email, phone }) => {
      const matchesName = !filterName || name.toLowerCase().includes(filterName.toLowerCase());
      const matchesUsername = !filterUsername || username.toLowerCase().includes(filterUsername.toLowerCase());
      const matchesEmail = !filterEmail || email.toLowerCase().includes(filterEmail.toLowerCase());
      const matchesPhone = !filterPhone || phone.includes(filterPhone);

      return matchesName && matchesUsername && matchesEmail && matchesPhone;
    });
  }, [filterName, filterUsername, filterEmail, filterPhone, users]);

  useEffect(() => {
    if (!isFilterAdded) {
      setIsShouldBeCleared(false);
    }
  }, [isFilterAdded]);

  if (status === STATUS.LOADING) return <Loader/>;

  if (status === STATUS.FAILED) return <ErrorMessage message={error || 'An unknown error occurred'} />
  
  const resetFilters = () => setIsShouldBeCleared(true);

  const handleFilterNameChange = _.debounce((value: string) => setFilterName(value), debounceAmount);
  const handleFilterUsernameChange = _.debounce((value: string) => setFilterUsername(value), debounceAmount);
  const handleFilterEmailChange = _.debounce((value: string) => setFilterEmail(value), debounceAmount);
  const handleFilterPhoneChange = _.debounce((value: string) => setFilterPhone(value), debounceAmount);
  return (
    <div className="user-table-container">
      <div className="filter-container">
        <div className='filter-container__row'>
          <h3>Filters</h3>
          {isFilterAdded ? <button onClick={resetFilters}>
            Reset filters 
            <FaTimesCircle size={24} />
          </button> : null}
        </div>
        <div className='filter-container__row'>
          <FilterInput
            placeholder={Placeholders.name}
            isShouldBeCleared={isShouldBeCleared}
            onChange={handleFilterNameChange}
          />
          <FilterInput
            placeholder={Placeholders.username}
            isShouldBeCleared={isShouldBeCleared}
            onChange={handleFilterUsernameChange}
          />
        </div>
        <div className='filter-container__row'>
          <FilterInput
            placeholder={Placeholders.email}
            isShouldBeCleared={isShouldBeCleared}
            onChange={handleFilterEmailChange}
          />
          <FilterInput
            placeholder={Placeholders.phone}
            isShouldBeCleared={isShouldBeCleared}
            onChange={handleFilterPhoneChange}
          />
        </div>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>{TableColumns.name}</th>
            <th>{TableColumns.username}</th>
            <th>{TableColumns.email}</th>
            <th>{TableColumns.phone}</th>
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
