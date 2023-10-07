import { useDispatch, useSelector } from 'react-redux'
import {
  getAllServices,
  getServicesError,
  getServicesStatus,
  fetchServices
} from './servicesSlice'
import { useEffect } from 'react'
import Service from './Service'
const ServiceList = () => {
  const serviceStatus = useSelector(getServicesStatus)
  const error = useSelector(getServicesError)
  const services = useSelector(getAllServices)

  const dispatch = useDispatch()

  useEffect(() => {
    if (serviceStatus === 'idle') {
      dispatch(fetchServices())
    }
  }, [dispatch, serviceStatus])

  let content = ''
  if (serviceStatus === 'loading') {
    content = <p>'Loading...'</p>
  } else if (serviceStatus === 'succeeded') {
    content = services.map((service, i) => {
      return <Service key={i} service={service} />
    })
  } else if (serviceStatus === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>Services we provide to our customers</p>
        </div>
        <div className='row'>{content}</div>
      </div>
    </div>
  )
}
export default ServiceList
