import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from 'search_bar';

const API_KEY = 'AIzaSyDU__Ld0_TK8aKmPqcWkHlX3W9oHvvKedQ';


// Create a new component. This component should produce some HTML.
const App = () => {
    return <div>Hello World!</div>;
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));