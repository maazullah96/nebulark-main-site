// export const ProductLinks = ({
//   title,
//   smallImage,
//   facebook,
//   twitter,
//   wordpress,
//   instagram
// }) => {
//   console.log(props)
//   const links = [twitter, facebook, instagram, wordpress]
//   return (
//     <div className='portfolio-item'>
//       <div className='hover-bg'>
//         {' '}
//         <div className='hover-text'>
//           <h4>{title}</h4>
//           {props ? (
//             <div className='row'>
//               <div className='social'>
//                 <ul>
//                   <li>
//                     <a href={facebook || '/'}>
//                       <i className='fa fa-facebook'></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={twitter || '/'}>
//                       <i className='fa fa-twitter'></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={wordpress || '/'}>
//                       <i className='fa fa-wordpress'></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={instagram || '/'}>
//                       <i className='fa fa-instagram'></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             ''
//           )}
//         </div>
//         {/* </div> */}
//         <img src={smallImage} className='img-responsive' alt={title} />{' '}
//         {/* </a>{' '} */}
//       </div>
//     </div>
//   )
// }

export const ProductLinks = ({
  title,
  images,
  facebook,
  twitter,
  wordpress,
  instagram
}) => {
  const links = [twitter, facebook, instagram, wordpress]
  console.log(images)
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        <div className='hover-text'>
          <h4>{title}</h4>
          {links && (
            <div className='row'>
              <div className='social'>
                <ul>
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href={link || '/'}>
                        <i className={`fa fa-${getIconName(index)}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <img src={images[0]} className='img-responsive' alt={title} />
      </div>
    </div>
  )
}

// Helper function to map index to icon name
const getIconName = (index) => {
  switch (index) {
    case 0:
      return 'facebook'
    case 1:
      return 'twitter'
    case 2:
      return 'instagram'
    case 3:
      return 'wordpress'
    default:
      return ''
  }
}
