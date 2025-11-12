import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import { AnimatedLettersFromArray, AnimatedLettersFromString,stringToChars } from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
 
  const initArray = stringToChars('I am');
  const nameArray = stringToChars('Rahul Kumar');

  const jobArray = stringToChars('A highly focused software developer with 10+ years of experience in a variety of development and engineering positions. Organized, methodical, and with a keen eye for detail results in solid coding and trustworthy software programs. Understanding client requirements and communicating the progress of projects are core values in achieving long-lasting business relationships.')


  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className=" container home-page">
        <div className="text-zone">
          <h1><AnimatedLettersFromString
            letterClass={letterClass}
            stringInput={'Welcome to my Portfolio.'}
            idx={15}
          /></h1>
          <h1>
            <AnimatedLettersFromArray
              letterClass={letterClass}
              strArray={initArray}
              idx={15}
            />
            <br />
            <AnimatedLettersFromArray
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h1 className="job">
            <AnimatedLettersFromArray
              letterClass={letterClass}
              strArray={jobArray}
              idx={10}
            />
          </h1>
          <h2>Frontend Developer / Core Java / Javascript / Programmer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
