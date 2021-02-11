
import Photo from './Photo';
import NoResults from './NoResults';

/* Display loading indicator, no results component, or Flickr search results */
const PhotoContainer = props => {
  return (
    <div className="photo-container">
        <h2>{ props.title }</h2>
        <ul>
          {
            props.loading ? 
            <h2 className="loading">Loading... </h2> : 

            props.imgs.length ?
            props.imgs.map((img, i) => <Photo url={ `https://farm66.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg` } key={i} alt={ img.title } />) :

            <NoResults />
          }
        </ul>
    </div>
  );
}

export default PhotoContainer;
