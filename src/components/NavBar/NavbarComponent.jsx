import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Outlet, Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import AuthenticationService from "../../services/authentication.service";
import './style.css'

const NavbarComponent = ({ amountProducts }) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        const user = AuthenticationService.getCurrentUser()
        if (user) {
            setCurrentUser(user)
        }
    }, [])


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = () => {
        setAnchorElUser(null);
        AuthenticationService.logout()
        window.location.reload()
    }

    return (
        <>
            <AppBar position="static" style={{ background: 'transparent' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            component={Link}
                            to='/'
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                                cursor: 'pointer'
                            }}
                        >
                            Ст. Мізоч
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            <Link to='/menu'>
                                <Button
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    Меню
                                </Button>
                            </Link>
                            <Link to='/booking'>
                                <Button
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    Забронювати
                                </Button>
                            </Link>
                            <Link to='/aboutus'>
                                <Button
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    Про нас
                                </Button>
                            </Link>
                            <Link to='/gallery'>
                                <Button
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    Галерея
                                </Button>
                            </Link>

                        </Box>
                        {currentUser ? (
                            <>
                                <IconButton component={Link} sx={{ mx: 5 }} to='/bucket' aria-label="Show cart items" color="inherit">
                                    <Badge badgeContent={amountProducts} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: "45px" }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem onClick={handleCloseUserMenu} component={Link} to={`/profile/${currentUser.id}`}>
                                            <Typography textAlign="center">Профіль</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseUserMenu} component={Link} to={'/orders'}>
                                            <Typography textAlign="center">Замовлення</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={logout}>
                                            <Typography textAlign="center">Вийти</Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </>)
                            :
                            (
                                <>
                                    <Button color="inherit" component={Link} to="/login">Вхід</Button>
                                    <Button color="inherit" component={Link} to='/register'>Реєстрація</Button>
                                </>
                            )
                        }
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    );
}

export default NavbarComponent