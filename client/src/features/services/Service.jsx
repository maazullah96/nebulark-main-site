const Service = ({ service }) => {
  return (
    <div key={`${service.title}-${service._id}`} className='col-md-4'>
      {' '}
      <i className={service.icon}></i>
      <div className='service-desc'>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  )
}
export default Service
