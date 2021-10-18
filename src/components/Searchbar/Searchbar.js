import { useState } from 'react';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please,enter the correct request!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleQueryChange}
        />
        <button
          className={s.searchFormButton}
          // style={{ marginRight: 5 }}
          type="submit"
        >
          <ImSearch
            style={{ marginRight: 4, marginLeft: 4, width: 20, height: 20 }}
          />
        </button>
      </form>
    </header>
  );
}
Searchbar.propTypes = { onSubmit: propTypes.func.isRequired };
