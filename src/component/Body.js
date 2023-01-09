import React from 'react'

const Body = ({header, content, img, pageName, imgUrl}) => {
  return (
    <div className={pageName+" page"}>
      <h1>{header}</h1>
      <p className="content">
        {content}
      </p>
      <p>
        <a href={imgUrl}><img className="image" src={img} alt="" /></a>
      </p>
    </div>
  )
}

export default Body