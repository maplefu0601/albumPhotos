/* eslint-disable import/first */
// Router set up
const React = require('react');
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Components
import App from '../App';
import AlbumsComponent from '../components/albums';
import PhotosComponent from '../components/photos';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/albums" component={AlbumsComponent} />
            <Route
                path="/photos/:albumId"
                component={PhotosComponent}
            />
        </div>
    </Router>
);
export default routing;
