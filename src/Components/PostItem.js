import React from 'react'

const PostItem = (props) => {
  return (
    <div>
      <div className='post_item'>
        <div className='postHeader'>
          <h3 className='userPost'>{props.userpost}</h3>
          <h6 className='date'>{props.date}</h6>
        </div>
          <p className="mess">{props.message}</p>
      </div>
    </div>
  )
}

export default PostItem