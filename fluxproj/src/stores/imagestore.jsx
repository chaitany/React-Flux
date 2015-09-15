var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');

module.exports =  Reflux.createStore({
	listenables: [Actions],
	getImages:function(topicId){
		return Api.get('topics/'+topicId) 
		//'get' request returns a promise
		.then(function(data){
			this.images = data.data;
			this.triggerChange();
	//since we r refering 'this' and promise we need to use'bind'
		}.bind(this)); 
	},
	triggerChange:function(){
		this.trigger('change', this.images);
	}

});