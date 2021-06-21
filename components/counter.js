import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from 'store/actions'
import s from './Counter.module.css'
import classNames from 'classnames'

const Counter = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className={s.Counter}>
      <h1
        className={classNames(s.Counter__Body, {
          [s.Counter__Body_red]: true,
        })}
      >
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  )
}

export default Counter
