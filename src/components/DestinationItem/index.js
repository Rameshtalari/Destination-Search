import './index.css'

const DestinationItem = props => {
  const {destinationDetailsList} = props
  const {imgUrl, name} = destinationDetailsList

  return (
    <li className="destination-item">
      <img src={imgUrl} className="destination-img" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
