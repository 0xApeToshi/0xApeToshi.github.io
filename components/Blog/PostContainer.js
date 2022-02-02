import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../redux/actions';
import { find } from 'lodash';
import { Container, Grid, Typography, Divider, Paper } from "@material-ui/core";
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  blogTitle: {
    fontSize: "20px",
    color: "#bfc500",
    marginBottom: "10px"
  },
  blogContent: {
    fontSize: "18px",
    color: "#fff",
    marginBottom: "20px"
  },
}));

export default function Home(props) {
  const classes = useStyles();

  const dispatch = useDispatch()
  const post = useSelector(state => {
    return state.posts.items[0]
  })

  useEffect(() => {
    dispatch(fetchPost());
  }, [])

  return (
    <Container>
      <Paper zdepth={0} style={{ padding: 16 }}>
        {post &&
          (<article>
            <Typography variant="h3" className={classes.blogTitle}>
              {post.title}
            </Typography>
            <time dateTime={post.date}>{moment(post.date).fromNow()}</time>
            <br />
            <br />
            <Divider />
            {post.content &&
              post.content
                .split('\n')
                .map((paragraph, index) => <Typography variant="h6" key={index} className={classes.blogContent}>{paragraph}</Typography>)}
          </article>)}
      </Paper>
    </Container>
  )
}
