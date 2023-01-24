// import ethImg from '../../assets/images/eth.png'

// import ntoulab from '../../assets/images/ntoulab.jpg'
import nthu from '../../assets/images/nthu.jpg'
import rogers from '../../assets/images/rogers.jpg'
import gallop from '../../assets/images/gallop.png'
import nabawan from '../../assets/images/nabawan.jpg'

const work = {
    pageName: "work",
    content: (
        <>
            In 2019, I joined a parallel computing lab at National Tsing Hua University.
            <center><img src={nthu} alt="" /></center>
            In my two years at the parallel computing lab, I worked as a software engineer intern at RogersAI.
            <center><img src={rogers} alt="" /></center>
            After I finished my paper at the parallel computing lab, I joined Gallopwave to work on automating car driving.
            <center><img src={gallop} alt="" /></center>
            In 2021, I joined Nabawan, and now we are developing some of the top-ranking apps in Taiwan.
            <center><img className='bimg' src={nabawan} alt="" /></center>

            {/* My interest in blockchain technologies starts in 2022. And I believe that, in one way or another, in the long run, it would make our world a better place. <br/><br/>

            Despite numerous negative news stories and rug pulls in 2022,
            I see many passionate developers and Ethereum node operator communities still working toward a better future.
            Influenced by them and their vision, not just because they're trying to make quick money,
            the goal of allowing anyone, anywhere, at any time to access their funds and a global virtual machine
            drives me to get involved in the community and try to do my part to help. <br/><br/>

            I am currently working on a trading bot to get familiar with smart contracts and the Ethereum virtual machine.
            and I aim to be a blockchain developer in the future. */}
        </>
    ),
    header: (
        <>
            Work
        </>
    ),
    // img: ethImg,
    // imgUrl: "https://ethereum.org/en/"
}

export default work
