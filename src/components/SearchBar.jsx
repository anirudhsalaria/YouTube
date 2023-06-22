import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '2px solid #e3e3e3',
        pl: 3,
        display: 'flex',
        fontSize: { xs: "12px" }
      }}
    >
      <input type='text'
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      />
      <IconButton type="submit" sx={{
        p:
          '10px', color: 'red'
      }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
