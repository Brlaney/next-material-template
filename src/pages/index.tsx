import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import styles from '@/styles/pages/Home.module.scss'


export default function Home() {
  return (
    <>
      <Container className={styles.container}>

        {/* Header */}
        <Grid className={styles.grid} container justifyContent='center' alignItems='center'>
          <Grid className={styles.item} item lg={8} xs={12}>
            <Card className={styles.card} elevation={2}>
              <CardContent className={styles.content}>
                <Typography className={styles.header1} variant='h2' component='h1'>
                  Welcome, to
                </Typography>
                <Typography className={styles.header2} variant='h1' component='h1'>
                  Next.js + Material-UI
                </Typography>
              </CardContent>
              <CardActions className={styles.actions}>
                <Typography className={styles.body} variant='body1' component='div'>
                  This template can be used as a baseline frontend web application.
                  Click the link to learn more.
                </Typography>
                <Link href='https://github.com/Brlaney/next-material-template'>
                  <Button className={styles.button} variant='outlined' color='primary'>
                    Source code
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {/* Row of content */}
        <Grid className={styles.gridRow} container justifyContent='center' alignItems='center'>
          
          {/* Twitter link */}
          <Grid className={styles.rowItem} item xs={3}>
            <Card className={styles.card} elevation={2}>
              <CardContent className={styles.content}>
                <Typography className={styles.title} variant='h2' component='h1'>
                  Twitter
                </Typography>
              </CardContent>
              <CardActions className={styles.actions}>
                <Typography className={styles.body} variant='body2' component='div'>
                  Follow me on Twitter
                </Typography>
                <Link href='https://github.com/Brlaney/next-material-template'>
                  <Button className={styles.twitterButton} variant='outlined' color='primary'>
                    <TwitterIcon className={styles.twitter} />
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          {/* Instagram link */}
          <Grid className={styles.rowItem} item xs={4}>
            <Card className={styles.card} elevation={2}>
              <CardContent className={styles.content}>
                <Typography className={styles.title} variant='h2' component='h1'>
                  Instagram
                </Typography>
              </CardContent>
              <CardActions className={styles.actions}>
                <Typography className={styles.body} variant='body2' component='div'>
                  Follow me on Instagram
                </Typography>
                <Link href='https://github.com/Brlaney/next-material-template'>
                  <Button className={styles.instagramButton} variant='outlined' color='primary'>
                    <InstagramIcon className={styles.instagram} />
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          {/* Link to github */}
          <Grid className={styles.rowItem} item xs={4}>
            <Card className={styles.card} elevation={2}>
              <CardContent className={styles.content}>
                <Typography className={styles.title} variant='h2' component='h1'>
                  GitHub
                </Typography>
              </CardContent>
              <CardActions className={styles.actions}>
                <Typography className={styles.body} variant='body2' component='div'>
                  Connect with me on GitHub
                </Typography>
                <Link href='https://github.com/Brlaney/next-material-template'>
                  <Button className={styles.githubButton} variant='outlined' color='primary'>
                    <GitHubIcon className={styles.github} />
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
