import React from 'react'

const Body = ({header, content, img, pageName}) => {
  return (
    <div className={pageName+" page"}>
        <p>
          <h1>{header}</h1>
          {content}
        </p>
        <img className={pageName + " image"} src={img} alt="" />
    </div>
  )
}

export default Body