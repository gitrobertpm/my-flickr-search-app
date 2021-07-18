
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

import './css/App.css';


/* To use your own Flickr key
 * To use your own Flickr key:
 * Create a src/config.js file
 * Use your own key in the line below
 * 
 * const apiKey = "_your_api_key_here_"
 * 
 * Move the above line to config.js and export the apiKey
 * Import the apiKey from config.js and use it to replace variable value below
 */
const apiKey = process.env.REACT_APP_API_KEY;

const App = props => {
  /* Create state for photos, search term, and loading indicator */
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  /* When the app loads and when the URL updates, the page is re-rendered */
  useEffect(() => {
    setPhotos([]);
    const param = props.location.pathname.slice(props.location.pathname.lastIndexOf('/') + 1);
    setSearchTerm(param);
    getImages(param);
  }, [props.location.pathname]);

  /* Request images from Flickr, add result to state and handling loading state  */
  const getImages = async (searchTerm = 'star wars') => {
    try {
      if (searchTerm) {
        setLoading(true);
        const raw = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`);
        const data = await raw.json();
        setPhotos(data.photos.photo);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <>
      <header>
        <h1>React Flickr Gallery</h1>
        <SearchForm />
        <Nav />
      </header>
      <div className="App container">
        <Switch>
          <Route exact path="/" component={ () => <Redirect to="/search/nebulae" /> } />
          <Route exact path="/search/:param" component={ () => <PhotoContainer loading={loading} title={ searchTerm } imgs={ photos } /> } />
          <Route exact path="/notfound" component={ NotFound } />
          <Route component={ () => <Redirect to="/notfound" /> } />
        </Switch>
      </div>
    </>
  );
};

export default withRouter(App);
