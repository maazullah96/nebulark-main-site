import { useSelector } from 'react-redux'
import { getAboutUsData } from './aboutUsSlice'
import Loading from '../../components/Loading'

export const Values = () => {
  const { values } = useSelector(getAboutUsData)
  // const values = undefined
  console.log(values)
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Values</h2>
        </div>
        <div className='row'>
          {values ? (
            values.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                {' '}
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                {/* <p>{d.text}</p> */}
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  )
}

export default Values
