var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
//if any action in Actions is same as the method that present in this file, call it
//So triggering an action in the actions.jsx looks for the method 
listenables: [Actions], 
	getTopics:function(){
		return Api.get('topics/defaults')
		.then(function(data){
			this.topics = data.data;
			this.triggerChange();
		}.bind(this));
	},
	triggerChange:function(){
		//whenever new changes occur, show the relevant data i.e topics
		this.trigger('change', this.topics); 
	}

});