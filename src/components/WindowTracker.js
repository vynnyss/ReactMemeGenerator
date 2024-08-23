import React from 'react'

export default function WindowTracker() {

    const[windowSize, setWindowSize] = React.useState(window.innerWidth)


    React.useEffect(() => {
        function WathWidth() {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener("resize", WathWidth)
        return function () {
            window.removeEventListener("resize", WathWidth)
        }
    }, [])


  return (
    <h1>Window Width: {windowSize}</h1>
  )
}
