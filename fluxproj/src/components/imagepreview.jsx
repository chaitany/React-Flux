var React = require('react');

module.exports = React.createClass({
	render: function(){
		return <div>{this.image}</div>
	},
	image:function(){
		// the 'h' before jpg represents the pics has to be 200X200
		var link = "http://i.imgur.com/" + this.props.id + 'h.jpg';
		return <img src={link} />
	}
});