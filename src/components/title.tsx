import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";



export default function Title() {
    return (
        <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Pokemon Explorer
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
            Pokemon Explorer is an app designed for Pokemon enthusiasts to discover and explore various aspects of the Pokemon universe.
            </Typography>
        </Container>
    );
}