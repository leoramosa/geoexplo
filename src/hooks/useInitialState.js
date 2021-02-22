import { useState } from "react";
import initialState from './../initialState'

const useInitialState = () => {
  const [state, setSate] = useState(initialState)

  return {
    state, 
    setSate,
  }
}

export default useInitialState;
