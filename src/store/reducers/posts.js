import {ADD_POST, ADD_COMMENT} from '../actions/actionTypes';

const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: 'Pardal',
      image: require('../../../assets/imgs/gate.jpg'),
      comments: [
        {
          nickname: 'Bada',
          comment: 'pardal vei de roxa',
        },
        {
          nickname: 'Joaozinho',
          comment: 'Muito bom mermo',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'Bada',
      image: require('../../../assets/imgs/fence.jpg'),
      comments: [
        {
          nickname: 'Pardal',
          comment: 'Bada vei de roxa',
        },
        {
          nickname: 'Joaozinho',
          comment: 'Muito bom mermo',
        },
      ],
    },
  ],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload,
        }),
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.comments.concat(action.payload.comment);
            } else {
              post.comments = [action.payload.comment];
            }
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

export default reducers;
