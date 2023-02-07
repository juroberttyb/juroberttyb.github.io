import ecoImg from '../../assets/images/eco.jpg'

const about = {
    pageName: "about",
    content: (
        <>
            Me and my friends are always doing or on the way to doing something interesting.<br/>
            Currently, we are building a trading bot on Ethereum.<br/><br/>
            In my free time, I enjoy taking a walk, playing piano jazz, and watching stand-up comedy.<br/>
            I also make ecosystems from time to time.
            {/* <center><img src={ecoImg} alt="" /></center> */}

            {/* This is a photo of me and my friends.
            <center><img className='bimg' src={msImg} alt="" /></center> */}
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
    img: ecoImg,
    // imgUrl: "https://www.youtube.com/channel/UCmEH_lLXrnW_L3n6x_4l1Pg",
}

export default about