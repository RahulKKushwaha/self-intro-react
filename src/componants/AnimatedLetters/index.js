import './index.scss'

const AnimatedLettersFromArray = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}
const AnimatedLettersFromString = ({ letterClass, stringInput, idx }) => {
  const strArray = stringToChars(stringInput);
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}
function stringToChars(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Expected a string');
  }
  return input.split('');
}
// Named exports so other modules can import specific components/utilities
export { AnimatedLettersFromArray, AnimatedLettersFromString, stringToChars };

// Keep a default export for modules that import the component as default
// Historically the code imported a default AnimatedLetters component
// Use AnimatedLettersFromArray as the default to preserve expected behavior
export default AnimatedLettersFromArray;
