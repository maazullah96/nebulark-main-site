import ContactForm from './ContactForm'
import ContactData from './ContactData'
import Footer from './Footer'
const Contact = () => {
  return (
    <div id='contact'>
      <div className='container'>
        <ContactForm />
        <ContactData />
        <Footer />
      </div>
    </div>
  )
}
export default Contact
