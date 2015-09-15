
var React = require('react');
var Header = require('./header');
var Topiclist = require('./topiclist');

module.exports = React.createClass({
	
	render:function(){

		return <div><div><Header /></div>
		<div>{this.content()}</div>
		</div>

	},
	content:function(){
		if(this.props.children){

			return 	this.props.children
		}else{
			return <Topiclist />
		}
	}
});