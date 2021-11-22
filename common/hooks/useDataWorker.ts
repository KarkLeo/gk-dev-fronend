import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { dataWorkerThunk } from 'services/common'

const useDataWorker = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dataWorkerThunk())
  }, [dispatch])
}

export default useDataWorker
