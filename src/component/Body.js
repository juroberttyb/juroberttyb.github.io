import React from 'react'

const Body = ({header, content, img}) => {
  return (
    <section id="banner">
        <div class="content">
        <header>
            <center>
            <h2>{header}</h2>
            <p>
                {content}
            </p>
            </center>
        </header>
        <span class="image"><img src={img} alt="" /></span>
        </div>
    </section>
  )
}

export default Body