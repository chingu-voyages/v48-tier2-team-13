
import defaultDinoImage from '../assets/img/default-dino-image.png'

function SearchItemPreview (previewDetails) {
    const {name, weight,imageUrl, length, country, diet}= previewDetails.previewDetails

    return (
        <div className='border-4'>
            <div>
                {
                    imageUrl==='N/A'? <img src={defaultDinoImage} alt={name}/>: <img src={imageUrl} alt={name}/>
                }
                
            </div>
            <div>
                <h2>Name: {name}</h2>
                <p>Weight: {weight==='N/A'? 'unknown': weight + ' kg'}</p>
                <p>Length: {length==='N/A'? 'unknown': length + ' m'}</p>
                <p>Country: {country==='N/A'? 'unknown': country }</p>
                <p>Diet: {diet==='N/A'? 'unknown': diet}</p>
            </div>
        </div>
    )
}

export default SearchItemPreview