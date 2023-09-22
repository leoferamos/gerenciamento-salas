import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  const [status, setStatus] = useState('Aula não iniciada');
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh', paddingTop: '16px' }}>
      <AppBar position="fixed">
        <Toolbar style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <Typography variant="h6" component="div" style={{ fontWeight: 'bold', flexGrow: 1, textAlign: 'left', fontFamily: 'Roboto, sans-serif' }}>
            Gerenciamento de Salas
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to="/teste" onClick={handleClose}>Fazer Login</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <img
          src="/images/uploadedwebclientlogo.jpg"
          alt="Logo da Faculdade"
          style={{ width: '150px', height: 'auto', marginBottom: '16px' }}
        />
        <p style={{ fontFamily: 'sans-serif' }}>Status: {status}</p>
        <Button
          variant={status === 'Aula em andamento' ? 'contained' : 'outlined'}
          color="success"
          onClick={() => handleStatusChange('Aula em andamento')}
        >
          Iniciar Aula
        </Button>
        <Button
          variant={status === 'Intervalo' ? 'contained' : 'outlined'}
          style={{
            borderColor: 'yellow',
            color: status === 'Intervalo' ? 'black' : 'black',
            backgroundColor: status === 'Intervalo' ? 'yellow' : 'transparent',
          }}
          onClick={() => handleStatusChange('Intervalo')}
        >
          Intervalo
        </Button>
        <Button
          variant={status === 'Aula finalizada' ? 'contained' : 'outlined'}
          style={{
            borderColor: 'black',
            color: status === 'Aula finalizada' ? 'white' : 'black',
            backgroundColor: status === 'Aula finalizada' ? 'black' : 'transparent',
          }}
          onClick={() => handleStatusChange('Aula finalizada')}
        >
          Finalizar Aula
        </Button>
        <Button
          variant={status === 'Erro' ? 'contained' : 'outlined'}
          color="error"
          onClick={() => handleStatusChange('Erro')}
        >
          Erro
        </Button>
      </div>
    </div>
  );
}

export default App;
