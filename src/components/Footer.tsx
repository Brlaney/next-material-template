import * as React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styles from '@/styles/components/Footer.module.scss'


export default function Footer(props: any) {
  return (
    <Box className={styles.footerContainer}>
      <Typography
        className={styles.footer}
        variant='body2'
        align='center'
        {...props}
      >
        {'Copyright © '}
        <Link
          className={styles.link}
          color='inherit'
          href='https://github.com/Brlaney/next-material-template'
        >
          Next-Mui Template
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
