import * as React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import StarIcon from '@mui/icons-material/Star'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import PublicIcon from '@mui/icons-material/Public'

import SearchBar from './SearchBar'
import CartItems from '../Cart/CartItems'
import { ThemeContext } from '../Theme/ThemeProvider'
import { AppState } from '../../types/types'

type Anchor = 'right'

export default function PrimarySearchAppBar() {
  const setThemeName = useContext(ThemeContext)
  const cartItems = useSelector((state: AppState) => state.shopping.inCart)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null)
  const [state, setState] = React.useState({
    right: false,
  })
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  // prettier-ignore
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return
        }

        setState({ ...state, [anchor]: open })
      }

  // list of countries in cart
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <CartItems />
      </List>
    </Box>
  )

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  // handle choosing themes
  const handleBlueTheme = () => {
    setThemeName('blueTheme')
    handleMenuClose()
  }

  const handleRedTheme = () => {
    setThemeName('redTheme')
    handleMenuClose()
  }

  const handleGreenTheme = () => {
    setThemeName('greenTheme')
    handleMenuClose()
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleBlueTheme}>Blue Theme</MenuItem>
      <MenuItem onClick={handleRedTheme}>Red Theme</MenuItem>
      <MenuItem onClick={handleGreenTheme}>Green Theme</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <MenuItem onClick={handleBlueTheme}>Blue Theme</MenuItem>
        <MenuItem onClick={handleRedTheme}>Red Theme</MenuItem>
        <MenuItem onClick={handleGreenTheme}>Green Theme</MenuItem>
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              ml: -2,
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="home"
                color="secondary"
              >
                <PublicIcon />
              </IconButton>
            </Link>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Country List
          </Typography>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="shopping cart"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <ColorLensIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="dark-mode"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => setThemeName('darkTheme')}
              color="inherit"
            >
              <DarkModeIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="country starred"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <React.Fragment>
                <Badge badgeContent={cartItems.length} color="error">
                  <StarIcon onClick={toggleDrawer('right', true)} />
                  <Drawer
                    anchor="right"
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                  >
                    {list('right')}
                  </Drawer>
                </Badge>
              </React.Fragment>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}
