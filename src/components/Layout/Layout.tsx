import React, { FunctionComponent } from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Layout: FunctionComponent = ({ children }) => (
  <main>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          TODO App
        </Typography>
      </Toolbar>
    </AppBar>
    {children}
  </main>
);

export default Layout;
