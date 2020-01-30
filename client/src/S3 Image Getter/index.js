import React from 'react'; 
import ReactDOM from 'react-dom'; 
const retrieveImage = require('./image_getter.js').retreiveImage;

//here's example implementation

var bucket = 'bucket_name';
var prefix = 'folder/';
const urlPromise = retrieveImage(bucket, prefix);

urlPromise.then(function(url) 
{    
    const element =  <img src={url} alt={"test"}/> ;
    ReactDOM.render(element, document.getElementById('root'));
});
  
  

