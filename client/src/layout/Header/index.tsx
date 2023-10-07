import { useState, useContext } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  useTheme,
  Tooltip,
  Link as MuiLink,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  TrendingUp as TrendingUpIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  Search as SearchIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Speed as SpeedIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { ColorModeContext } from '../../theme/ColorModeContext';
import { ModalContext } from '../../context/ModalContext';
import { MODALS } from '../../helpers/constants';
import { AuthContext } from '../../context/AuthContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',

  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.grey[200]
      : theme.palette.grey[800],
  transition: '0.1s box-shadow linear',

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
    display: 'flex',
  },
  flexGrow: 1,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  flexGrow: 1,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  flexGrow: 1,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,

    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

function SearchWithBack({
  toggleSearch,
}: {
  toggleSearch: () => void;
}) {
  return (
    <>
      <IconButton
        aria-label="back"
        onClick={toggleSearch}
        sx={{ mr: 1.5 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for a Movie, TV show, Person, etc..."
          inputProps={{ 'aria-label': 'search' }}
          autoFocus
        />
      </Search>
    </>
  );
}

function SearchWithoutBack() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search for a Movie, TV show, Person, etc..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchActive, setSearchActive] = useState<boolean>(false);

  const { openModal } = useContext(ModalContext);
  const { user } = useContext(AuthContext);
  const colorMode = useContext(ColorModeContext);

  const theme = useTheme();
  const largeDevice = useMediaQuery(theme.breakpoints.up('md'));
  const mediumDevice = useMediaQuery(theme.breakpoints.up('sm'));

  const isProfileOpen = Boolean(anchorEl);

  const toggleSearch = () => {
    setSearchActive((prevSearchActive) => !prevSearchActive);
  };

  const handleProfileOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const renderBranding = (
    <MuiLink
      href="/"
      display="flex"
      alignItems="center"
      underline="none"
      color="error"
    >
      <SpeedIcon sx={{ fontSize: mediumDevice ? '32px' : '26px' }} />
      <Typography
        variant="h6"
        fontSize={mediumDevice ? '24px' : '20px'}
        noWrap
        component="div"
        color="orangered"
        fontWeight="bold"
      >
        MovieMeter
      </Typography>
    </MuiLink>
  );

  const renderProfileMenu = (
    <Menu
      id="profile-menu"
      anchorEl={anchorEl}
      open={isProfileOpen}
      onClose={handleProfileClose}
      MenuListProps={{
        'aria-labelledby': 'profile-menu',
      }}
    >
      <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
      <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
    </Menu>
  );

  const renderThemeSwitcher = () => {
    const icon =
      theme.palette.mode === 'dark' ? (
        <LightModeIcon />
      ) : (
        <DarkModeIcon />
      );
    return (
      <Tooltip title="Change Theme">
        <IconButton
          aria-label="change theme"
          color="inherit"
          onClick={colorMode.toggleColorMode}
        >
          {icon}
        </IconButton>
      </Tooltip>
    );
  };

  const renderNavElm = (
    <Box display="flex" gap={{ xs: 1, md: 2 }}>
      <Tooltip title="Search">
        <IconButton
          size="small"
          aria-label="show search bar"
          color="inherit"
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={() => {
            toggleSearch();
          }}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Trending">
        <IconButton
          size="small"
          aria-label="show trending page"
          color="inherit"
        >
          <TrendingUpIcon />
        </IconButton>
      </Tooltip>

      {/* If Authenticated */}
      {!!user ? (
        <>
          <Tooltip title="User Profile">
            <IconButton
              size="small"
              aria-label="user profile"
              color="inherit"
              aria-controls={
                isProfileOpen ? 'profile-menu' : undefined
              }
              aria-haspopup="true"
              aria-expanded={isProfileOpen ? 'true' : undefined}
              onClick={handleProfileOpen}
            >
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Tooltip>
          {renderProfileMenu}
        </>
      ) : (
        <Tooltip title="User Profile">
          <IconButton
            size="small"
            aria-label="user profile"
            color="inherit"
            onClick={() => openModal(MODALS.LOGIN_MODAL)}
          >
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Tooltip>
      )}

      {renderThemeSwitcher()}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: theme.palette.bgGradient,
          color: 'text.primary',
          width: '100%',
          mb: 5,
        }}
      >
        <Toolbar>
          {/* Bradnding */}
          {!searchActive && renderBranding}

          <Box sx={{ flexGrow: 1 }} />

          {/* Search Box */}
          {!largeDevice && searchActive ? (
            <SearchWithBack toggleSearch={toggleSearch} />
          ) : (
            largeDevice && <SearchWithoutBack />
          )}

          <Box sx={{ flexGrow: 1 }} />

          {!searchActive && renderNavElm}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
