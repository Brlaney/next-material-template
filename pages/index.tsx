import styles from '../styles/Home.module.scss'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'

export default function Home() {
  return (
    <>
      <Container>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item lg={8} xs={12}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant='h1' component='h1'>
                  Welcome, to a starter
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' color='primary'>
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
