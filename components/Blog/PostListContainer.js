import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/actions'
import { Link } from "@material-ui/core";
import { truncate } from '../../helpers/utilities';
import { Container, Grid, Box, Typography } from "@material-ui/core";
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
export default function PostListContainer() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  return (
    <Container>
      {posts && posts.items.map((post, index) => (
        <Link
          href={`/post?id=${post.id}&slug=${post.slug}`}
          style={{ textDecoration: 'none' }}
          key={index}
        >
          <Box style={{ lineHeight: 1.35 }}>
            <Typography variant="h3" className={classes.blogTitle}>
              {post.title}
            </Typography>
            <Typography variant="h6" className={classes.blogContent}>
              {truncate(post.summary, 250)}&hellip;
            </Typography>
            <Box color="#03a9f4" textAlign="right">
              <time dateTime={post.date}>{moment(post.date).fromNow()}</time>
            </Box>
          </Box>
        </Link>
      ))}
    </Container>
  )
}
