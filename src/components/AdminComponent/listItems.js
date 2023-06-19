import { Button, Link, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AuthenticationService from "../../services/authentication.service";

const logout = () => {
  AuthenticationService.logout()
  window.location.reload()
}

export const mainListItems = (
    <React.Fragment>
      <ListItemButton LinkComponent={Link} href="/admin">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Керування" />
      </ListItemButton>
      <ListItemButton LinkComponent={Link} href="/admin/history">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Історія замовлень" />
      </ListItemButton>
      <ListItemButton LinkComponent={Link} href="/admin/clients">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Клієнти" />
      </ListItemButton>
      <ListItemButton >
        <Button onClick={logout}>Вийти</Button>
      </ListItemButton>
    </React.Fragment>
  );