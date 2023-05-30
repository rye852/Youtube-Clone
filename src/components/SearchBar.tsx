import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const SearchBar = () => {
  const errorMsg = () =>
    toast.error('you must add a Search Therm', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search/${searchTerm}`);
    } else {
      errorMsg();
    }
  };
  return (
    <Paper
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        width: '100%',
        maxWidth: '300px',
        display: 'flex',
      }}
      component={'form'}>
      <input
        className="search-bar"
        placeholder="Serach..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value);
        }}
        style={{ outline: 'none', border: 'none', flexGrow: 1 }}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <SearchIcon />
      </IconButton>
      <ToastContainer />
    </Paper>
  );
};

export default SearchBar;
