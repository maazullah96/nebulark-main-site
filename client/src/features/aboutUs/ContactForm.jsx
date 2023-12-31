// import { useSelector } from 'react-redux'
const initialState = {
  name: '',
  email: '',
  message: ''
}
import { useState } from 'react'

const ContactForm = () => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  //   const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    // emailjs
    //   .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //       clearState()
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
  }
  return (
    <div className='col-md-8'>
      <div className='row'>
        <div className='section-title'>
          <h2>Get In Touch</h2>
          <p>
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </p>
        </div>
        <form name='sentMessage' validate onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='form-control'
                  placeholder='Name'
                  required
                  onChange={handleChange}
                />
                <p className='help-block text-danger'></p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='form-control'
                  placeholder='Email'
                  required
                  onChange={handleChange}
                />
                <p className='help-block text-danger'></p>
              </div>
            </div>
          </div>
          <div className='form-group'>
            <textarea
              name='message'
              id='message'
              className='form-control'
              rows='4'
              placeholder='Message'
              required
              onChange={handleChange}
            ></textarea>
            <p className='help-block text-danger'></p>
          </div>
          <div id='success'></div>
          <button type='submit' className='btn btn-custom btn-lg'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
export default ContactForm
