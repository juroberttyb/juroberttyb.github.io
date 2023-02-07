// import pianoImg from '../../assets/images/piano.jpg'
import playImg from '../../assets/images/play.png'

const piano = {
    pageName: "piano",
    content: (
        <>
            I enjoy playing the piano and am currently most interested in jazz; I have performed in a number of venues, though not as professionally as others. 
            {/* <center><img src={playImg} alt="" /></center>
            <b>Click on the image below to see some piano music I made!</b>
            <center><a href="https://www.youtube.com/channel/UCmEH_lLXrnW_L3n6x_4l1Pg"><img src={pianoImg} alt="" /></a></center> */}
        </>
    ),
    header: (
        <>
            Me and piano
        </>
    ),
    img: playImg,
    imgUrl: "https://www.youtube.com/channel/UCmEH_lLXrnW_L3n6x_4l1Pg",
}

export default piano