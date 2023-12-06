import { useEffect, useState } from 'react'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Merhaba! I’m a 32-year-old virtuoso in the realm of Computer Engineering,
                        with a specialization in Web Development.
                        My passion lies in crafting dynamic and interactive web applications that not
                        only enhance user experience but also catalyze business growth.
                    </p>
                    <p align="LEFT">
                        I’m married with the sweetest, prettiest woman in the world and a proud father to two energetic boys and a charming girl, who are my constant
                        source of inspiration and joy. They motivate me to strive for excellence and
                        leave no stone unturned in my pursuit of success.
                    </p>
                    <p align="LEFT">
                        Being bilingual in English and Turkish, I can seamlessly navigate through diverse environments
                        and collaborate with international teams. This linguistic proficiency has been a cornerstone in
                        my professional journey, fostering connections with people across different cultures and backgrounds.
                    </p>
                    <p align="LEFT">
                        My analytical acumen, coupled with my technical prowess, empowers me to dissect complex problems, identify
                        underlying patterns, and devise efficient, innovative solutions. This trait has been instrumental in my web
                        development projects, enabling me to consistently deliver top-tier work.
                    </p>
                    <p align="LEFT">
                        In my leisure time, I relish quality moments with my family, delve into the exploration of cutting-edge web technologies,
                        and engage in continuous learning to stay abreast of the rapidly evolving field of web development.
                    </p>
                    <p align="LEFT">
                        Currently, I’m on the lookout for exciting opportunities in the web development sphere, either as an employee or a freelancer.
                        I’m eager to leverage my skills and experience to contribute to prospective projects and make a significant impact.
                    </p>
                    <p>
                        I firmly believe in the transformative power of technology and am thrilled about the boundless opportunities that lie ahead in my career.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About