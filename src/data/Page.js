import meImg from '../image/me.jpg'
import pianoImg from '../image/piano.jpg'
import labImg from '../image/lab.jpg'
import msImg from '../image/mlab.jpg'

const home = {
    content: (
        <>
            Welcome, this is my personal website. <br/>
            Me and my friends are always either be doing <br/>
            or on the way to be doing something interesting. <br/>
            Currently we are trying to build a trade bot on Ethereum. <br/>
        </>
    ),
    header: (
        <>
            Hi, I'm Robert
        </>
    ),
    img: meImg
}
export const homePage = home

const about = {
    content: (
        <>
            During my free time, I enjoy taking a walk, <br/>
            playing piano jazz and watching standup comedy. <br/>
            Also, I made some ecosphere from time to time, <br/>
            although useless, they look nice anyway. <br/>
        </>
    ),
    header: (
        <>
            About Me
        </>
    ),
    img: pianoImg
}
export const aboutPage = about

const publication = {
    content: (
        <>
            <a href="https://practical-dl.github.io/2022/index" color="blue">Low-rank Tensor Decomposition for Compression of<br/>Convolutional Neural Networks Using Funnel Regularization</a><br/>
            Accepted at AAAI-2022 Workshop, cited by 3 papers.<br/>
        </>
    ),
    header: (
        <>
            Publication
        </>
    ),
    img: labImg
}
export const publicationPage = publication

const quote = {
    content: (
        <>
            化繁為簡為智慧，而人所不能不去追尋的，謂之夢想。<br/>
            --- Me ---<br/>
        </>
    ),
    header: (
        <>
            Quote
        </>
    ),
    img: msImg
}
export const quotePage = quote
