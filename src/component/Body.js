import React from 'react'

const Content = ({header, content, img}) => {
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

// Welcome, this is my personal website. <br/>
// Me and my friends are always either be doing <br/>
// or on the way to be doing something interesting. <br/>
// Currently we are trying to build a trade bot on Ethereum. <br/>

export default Content