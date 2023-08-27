import React from 'react'
import LogElement from './LogElement'

type Props = {
  logs: Array<any>
}

const LogComponent = (props: Props) => {
  return (
    <div className='logs'>
    {props.logs.map((log) => 
    <LogElement hours={log.hours} minutes={log.minutes} imgID={log.imgID} actionName={log.actionName} iconSrc={log.iconSrc} />
    )}
      {/* <LogElement time='22:35' imgID='fQSunHvl8' actionName='Favorites' iconSrc='/heartred.svg' />
      <LogElement time='22:35' imgID='fQSunHvl8' actionName='Favorites' iconSrc='/heartred.svg' />
      <LogElement time='22:35' imgID='fQSunHvl8' actionName='Favorites' iconSrc='/heartred.svg' />
      <LogElement time='22:35' imgID='fQSunHvl8' actionName='Favorites' iconSrc='/heartred.svg' /> */}
    </div>
  )
}

export default LogComponent