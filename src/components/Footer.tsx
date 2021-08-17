import * as React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export default function Footer(props: any) {
  return (
    <div className='footerContainer'>
      <Typography className='footer' variant='body2' align='center' {...props}>
        {'Copyright © '}
        <Link color='inherit' href='https://github.com/Brlaney/next-material-template'>
          Next-Mui Template
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}
