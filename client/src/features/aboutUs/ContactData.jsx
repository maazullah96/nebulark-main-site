import { useSelector } from 'react-redux'
import { getAboutUsData } from './aboutUsSlice'

const ContactData = () => {
  const { contact } = useSelector(getAboutUsData)
  return (
    <div className='col-md-3 col-md-offset-1 contact-info'>
      <div className='contact-item'>
        <h3>Contact Info</h3>
        <p>
          <span>
            <i className='fa fa-map-marker'></i> Address
          </span>
          {contact ? contact?.address : 'loading'}
        </p>
      </div>
      <div className='contact-item'>
        <p>
          <span>
            <i className='fa fa-phone'></i> Phone
          </span>
          {contact ? contact?.phone : 'loading'}
        </p>
      </div>
      <div className='contact-item'>
        <p>
          <span>
            <i className='fa fa-envelope-o'></i> Email
          </span>{' '}
          {contact ? contact?.email : 'loading'}
        </p>
      </div>
    </div>
  )
}
export default ContactData
