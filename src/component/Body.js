import React from 'react'

const Body = ({header, content, img, pageName}) => {
  return (
    <div className={pageName+" page"}>
      <h1>{header}</h1>
      <p className="content">
        {content}
      </p>
      <p>
        <img className="image" src={img} alt="" />
      </p>
    </div>
  )
}

export default Body