import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteIcon from '@material-ui/icons/Delete'
import GridArea from '../Shared/GridArea'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  avatar: {
    backgroundImage: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
  }
})

const SAvatar = styled(Avatar)`
  transition: all .5s;
  cursor: pointer;
  &:hover {
  transform: rotate(360deg);
  }
`
class CardFrame extends React.Component {
  render () {
    const { classes, post } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <SAvatar className={classes.avatar}>
              R
            </SAvatar>
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
          <IconButton
            onClick={() => {
              this.props.removePhoto(post)
            }}
          >
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
