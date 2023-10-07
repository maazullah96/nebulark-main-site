import { useSelector } from 'react-redux'
import { getAboutUsData } from './aboutUsSlice'
const Footer = () => {
  const { socialMedia } = useSelector(getAboutUsData)
  console.log(socialMedia)
  let content = ''
  if (socialMedia) {
    content = (
      <div className='social'>
        <ul>
          {socialMedia.map((media) => (
            <li key={media.platform}>
              <a href={media.link || '/'}>
                <i className={`fa fa-${media.platform.toLowerCase()}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    content = <p>Loading...</p>
  }
  return (
    <div className='col-md-12'>
      <div className='row'>{content}</div>
    </div>
  )
}
export default Footer
