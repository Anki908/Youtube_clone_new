import React from 'react'

const commentData = [
{
    name: 'John',
    text: 'Nice video👍 ',
    replies: [
      {
        name: 'chris',
        text: 'cant agree more',
        replies: [
          {
            name: 'jasir',
            text: 'chris have you seen this before',
            replies: [],
          },
          {
            name: 'luther',
            text: 'chris make a video',
            replies: [],
          },
        ],
      },
      {
        name: 'rohan',
        text: 'fabulous',
        replies: [
          {
            name: 'zuan',
            text: 'i dont think so',
            replies: [
              {
                name: 'Mubashir',
                text: 'then go ahead and dislike it',
                replies: [],
              },
            ],
          },
          {
            name: 'sabir',
            text: 'informative one✅',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'rayman',
    text: 'superb😍',
    replies: [
      {
        name: 'Mubaz',
        text: 'what superb😍',
        replies: [],
      },
    ],
  },
  {
    name: 'Nevlie',
    text: 'you should have done this in a better way',
    replies: [
      {
        name: 'Jazz',
        text: 'he done pretty well ',
        replies: [
          {
            name: 'mazz',
            text: 'no i dont think so',
            replies:[],
          },
        ],
      },
    ],
  },
  {
    name: 'Jack',
    text: 'fantastic🚀',
    replies: [],
  },
  {
    name: 'Ezra Rico',
    text: 'enjoyy',
    replies: [],
  },
  {
    name: 'Lane',
    text: 'hello everyone',
    replies: [
      {
        name: 'Ivan',
        text: 'haii everyone',
        replies: [],
      },
    ],
  },
]

const Comment = ({data}) => {
    const {name , text} = data;
    return (
        <div className = "flex shadow-sm  p-1 mx-2 rounded-md my-2">
            <img 
            className = "w-12 h-12"
            alt = "user"
            src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            />
            <div className = "px-3">
                <p className = "font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
const CommentList = ({comments}) => {
    return comments.map((comment , index) => (
        <div className='pl-2'>
            <Comment key = {index} data = {comment}/>
            <div className = "pl-5 ml-5">
                <CommentList comments = {comment.replies}/>
            </div>
        </div>
    ))
}
const CommentsContainer = () => {
  return (
    <div>
      <h1 className = "font-bold text-xl pl-4">Comments:</h1>
      <CommentList comments = {commentData}/>
    </div>
  )
}

export default CommentsContainer
