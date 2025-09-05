

import { useState } from 'react';

function clickFunction(){

  const [state, setState] = useState ({clicks : 0})

  const [clicks, setClicks] = useState( 0)
  return(
    <view>
    <button title = {state.clicks + 'clicks'} />
    <button title = {clicks + 'clicks'}/>
    <view/>
  )

}