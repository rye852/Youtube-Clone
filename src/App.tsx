import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
