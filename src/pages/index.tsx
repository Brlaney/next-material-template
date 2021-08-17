import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import styles from '@/styles/pages/Home.module.scss'


export default function Home() {
  return (
    <>
      <Container className={styles.container}>
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
                <Button className={styles.button} variant='contained' color='primary'>
                  Action
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
