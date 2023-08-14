    import React from 'react';
    import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
    import { Link } from 'react-router-dom';
    import HomeIcon from '@mui/icons-material/Home';
    import SearchIcon from '@mui/icons-material/Search';
    import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

    import './index.css'; // Importe um arquivo CSS para estilos personalizados

    function Sidebar() {
    return (
        <Drawer variant="permanent" className="sidebar" sx={{ backgroundColor: '#000', width: 232, position: 'fixed', top: 'auto', bottom: 0 }}>

        <List direction="column">

            <ListItemButton component={Link} to="/" className="sidebar-item">
                <ListItemIcon justifyContent="center">
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText justifyContent="center" primary="Início" />
            </ListItemButton>

            <ListItemButton className="sidebar-item">
                <ListItemIcon>
                    <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Buscar" />
            </ListItemButton>
            
            <ListItemButton className="sidebar-items">
                <ListItemIcon>
                    <LibraryMusicIcon />
                </ListItemIcon>
                <ListItemText primary="Sua Biblioteca" />
            </ListItemButton>
        </List>
        </Drawer>
    );
    }

    export default Sidebar;
