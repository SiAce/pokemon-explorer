import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';

export default function Header() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <CatchingPokemonTwoToneIcon/>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mx: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 500,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Pokemon Explorer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
