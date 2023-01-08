import React from 'react'

const Body = ({header, content, img, pageName}) => {
  return (
    <div className={pageName}>
        <center>
          <h2>{header}</h2>
          <p>
              {content}
              <img className={pageName + " image"} src={img} alt="" />
          </p>
        </center>
    </div>
  )
}

export default Body