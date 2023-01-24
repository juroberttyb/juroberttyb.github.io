import pianoImg from '../../assets/images/piano.jpg'
import eco1Img from '../../assets/images/eco1.jpg'
import eco2Img from '../../assets/images/eco2.jpg'
import playImg from '../../assets/images/play.png'
import standupImg from '../../assets/images/standup.jpg'
import msImg from '../../assets/images/mlab.jpg'

const about = {
    pageName: "about",
    content: (
        <>
            In my free time, I enjoy taking a walk, playing piano jazz, and watching stand-up comedy.
            I also make some ecosystems from time to time that, while useless, look nice anyway.
            <center><img src={eco1Img} alt="" /></center>
            Here is another one; I did not make these; these are sea ecospheres.
            Sea ecospheres are extremely difficult to create, they are my current goal, I have only succeeded in creating freshwater ecospheres so far. 
            <center><img src={eco2Img} alt="" /></center>
            I enjoy playing the piano and am currently most interested in jazz; I have performed in a number of venues, though not as professionally as others. 
            <center><img src={playImg} alt="" /></center>
            <b>Click on the image below to see some piano music I made!</b>
            <center><a href="https://www.youtube.com/channel/UCmEH_lLXrnW_L3n6x_4l1Pg"><img src={pianoImg} alt="" /></a></center>
            Besides those hobbies, I also love to watch stand-up comedy. My favorite comedians include
            Louis CK, Dave Chappelle, George Carlin, Jim Jefferies, and Jimmy O. Yang
            <center><img src={standupImg} alt="" /></center>
            This is a photo of me and my friends.
            <center><img className='bimg' src={msImg} alt="" /></center>
            {/* Below are some principles I try my best to live by.<br/><br/>
            <center>If you went back and fixed all the mistakes you've made, you erase yourself - Louis CK</center><br/>
            <center>You got to tell each other the truth and negotiate - Jordan Peterson</center><br/>
            <center>化繁為簡為智慧，而人所不能不去追尋的，謂之夢想 - Me</center> */}
        </>
    ),
    header: (
        <>
            About Me
        </>
    ),
    // img: pianoImg,
    // imgUrl: "https://www.youtube.com/channel/UCmEH_lLXrnW_L3n6x_4l1Pg",
}

export default about