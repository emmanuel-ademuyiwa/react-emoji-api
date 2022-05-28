import React from 'react'

const Emoji = ({img}) => {
  return (
    <div className="emoji">
          <img src={img} alt="" />
        </div>
  )
}

export default Emoji