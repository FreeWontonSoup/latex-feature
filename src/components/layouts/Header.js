import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';

class Header extends React.Component {
    render() {
        return (
        <AppBar position="static">
            <Toolbar>
                <Typography component="h2" variant="headline" gutterBottom color="inherit">
                    Latex Viewer
                </Typography>
            </Toolbar>
          </AppBar>
        )
    }
}

export default Header;