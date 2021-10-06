import React, {useState} from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
 <tr><td>{text} {value}</td></tr>
)

const Statistics = (props) => {
  const addition = props.left + props.middle + props.right
  const average = (props.left * 1 + props.right * -1 + props.middle * 0) / addition
  const positives = props.left * (100/addition)

  if (addition === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

return(
<div>
  <h1>Statistics</h1>
  <table>
  <StatisticLine text="good" value={props.left} />
  <StatisticLine text="neutral" value={props.middle} />
  <StatisticLine text="bad" value={props.right} />
  <StatisticLine text="all" value={addition} /> 
  <StatisticLine text="average" value={average} /> 
  <StatisticLine text="positive" value={positives} /> 
  </table>
  </div>
)
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [middle, setMiddle] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleMiddleClick = () => {
    setAll(allClicks.concat('m'))
    setMiddle(middle + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  return (
    <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleLeftClick} text='Good'/>
        <Button handleClick={handleMiddleClick} text='Neutral'/>
        <Button handleClick={handleRightClick} text='Bad'/>
        <History allClicks={allClicks} />
        <Statistics left={left} middle={middle} right={right} />
    </div>
  )
}



export default App