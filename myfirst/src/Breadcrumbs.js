import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" sx={{ml: 10}}>
        <Link underline="hover" color="inherit" href="/">
          HOME 
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Graphics
        </Link>
        <Typography color="text.primary">Lizards</Typography>
      </Breadcrumbs>
    </div>
  );
}