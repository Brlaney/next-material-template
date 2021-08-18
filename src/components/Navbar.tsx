import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import styles from '@/styles/components/Navbar.module.scss'


const Navbar = () => {
  return (
    <>
      <AppBar className={styles.appBar} color='default' elevation={0}>
        <Toolbar className={styles.toolbar}>
          <Link className={styles.brandLink} href='/'>
            <Typography variant='h6' color='inherit' noWrap>
              Next-Mui Template
            </Typography>
          </Link>
          <nav className={styles.nav}>
            <Link variant='button' className={styles.link} href='#'>
              Features
            </Link>
            <Link variant='button' className={styles.link} href='#'>
              Enterprise
            </Link>
            <Link variant='button' className={styles.link} href='#'>
              Support
            </Link>
          </nav>
          <Button className={styles.button} href='#' variant='contained' color='primary'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;
