var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apikey = 'aafa90b18626ac9';

// function that make requests to imgur api for data
module.exports ={
	get:function(url){
		return fetch(rootUrl + url, {
			headers:{
				'Authorization':'Client-ID' + apikey
			}
		})
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			return data;
		});
	}
};