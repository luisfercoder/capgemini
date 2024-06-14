import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (postStatus === 'succeeded') {
    content = (
      <>
      <div className="div1">
       <div className="div2">
        {posts.map(post =>(
          <div key={post.id} className="div3">
           <h2>{post.title}</h2>
           <p className="pbody">{post.body}</p>
          </div>
        ))}
       </div>
      </div>
    </>
      
    );
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2 className="font-serif text-xl font-extrabold mb-10">Lista Fake API Data</h2>      
      {content}
    </section>
  );
};

export default PostsList;
