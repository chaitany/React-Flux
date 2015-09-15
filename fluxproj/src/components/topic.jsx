var React = require('react');
var Actions = require('../actions');
var Imagestore = require('../stores/imagestore');
var Reflux = require('reflux');
var Imagepreview = require('./imagepreview');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(Imagestore, 'onChange')
	],
	getInitialState: function(){
		return {
			images:[]
		}
	},
	componentWillMount: function(){
	//this method just fetched data one time and will not render again
		Actions.getImages(this.props.params.id);
	},
	componentWillReceiveProps: function(nextProps){
	//this method rerenders whenever it receives new props	
	Actions.getImages(this.props.params.id);
	},
	render:function(){
		return <div> 
			{this.renderimages}
		</div>
	},
	
	onChange: function(event, images){
		this.setState({
			images:images
		})
	},
	renderimages:function(){
		return this.state.images.slice(0,5).map(function(image){
			return <Imagepreview key={image.id} {...image} />
		});
	}
});