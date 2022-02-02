// import { connect } from 'react-redux';
// import { find } from 'lodash';
// import { fetchPost } from '../redux/actions';

// import Post from './Post';

// const mapStateToProps = (state, ownProps) => {
//   const { match: { params: { id, slug } } } = ownProps;
//   const post = find(state.posts.items, { id });
//   return { id, post, slug };
// };

// const mapDispatchToProps = dispatch => ({
//   fetchPost: (id, slug) => dispatch(fetchPost(id, slug)),
// });

// const wrapper = connect(mapStateToProps, mapDispatchToProps);
// const PostContainer = wrapper(Post);
// export default PostContainer;



import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../redux/actions';
import { find } from 'lodash';
import { Container, Grid, Typography, Divider, Paper } from "@material-ui/core";
import moment from 'moment';

export default function Home(props) {

  const dispatch = useDispatch()
  const post = useSelector(state => {
    console.log(state.posts.items, 'hhihi')
    return state.posts.items[0]
  })

  useEffect(() => {
    dispatch(fetchPost());
  }, [])

  return (
    <Paper zdepth={0} style={{ padding: 16 }}>
      <article>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{moment(post.date).fromNow()}</time>
        <br />
        <br />
        <Divider />
        {post.content &&
          post.content
            .split('\n')
            .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </article>
    </Paper>
  )
}
