import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constans';
import { SearchBar } from '../components';
const Navbar = () => {
  return (
    <Stack
      spacing={1}
      alignItems={'center'}
      p={2}
      sx={{
        zIndex: 20,
        height: '8vh',
        position: 'sticky',
        background: '#000',
        top: '0',
        justifyContent: 'space-between',
      }}
      direction={'row'}>
      <Link style={{ display: 'flex', alignItems: 'center' }} to={'/'}>
        <img src={logo} height={45} alt="logo" />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
