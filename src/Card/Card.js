import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteIcon from '@material-ui/icons/Delete'
import GridArea from '../Shared/GridArea'
import { Grid } from '@material-ui/core'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  }
})

class CardFrame extends React.Component {
  render () {
    const { classes, post } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={post.title}
          subheader='September 14, 2016'
        />
        <CardMedia
          className={classes.media}
          image={post.imageLink}
          title={post.title}
        />
        <CardContent>
          <Typography component='p'>
            {post.description}
          </Typography>
        </CardContent>
        <GridArea templateColumns={'1fr 1fr 1fr'} style={{ padding: 10 }}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </GridArea>
      </Card>
    )
  }
}

CardFrame.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardFrame)
