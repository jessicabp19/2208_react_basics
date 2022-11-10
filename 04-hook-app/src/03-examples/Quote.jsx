import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({quote, author}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0})

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect()
    setBoxSize({ height, width })
  
  }, [])

  return (
    <>
      <blockquote className="blockquote text-end"
        //style={{ display: 'flex'}} // === "display: 'flex"
      >
            <p ref={ pRef } className="mb-1"> { quote } </p>
            <footer className="blockquote-footer"> { author } </footer>
      </blockquote>
      
      {/* <code className="text-end">{ JSON.stringify(boxSize) }</code> */}
      
    </>
  )
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}