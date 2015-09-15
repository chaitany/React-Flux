var React = require('react');
var Reflux = require('reflux');
var Topicstore = require('../stores/topicstore');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	//on event triggers in topicstore do the 'onchange' function
	mixins:[Reflux.listenTo(Topicstore, 'onChange')],
	getInitialState: function(){
		return{
			topics:[]
		}
	},
	componentWillMount:function(){
		Actions.getTopics();
	},
	render: function(){
		return <div>{this.renderTopics()}</div>
	},
	renderTopics: function(){
		
		return this.state.topics.slice(0,4).map(function(topic){
			return <Link to={"topics/"+topic.id} key={topic.id}>
			<h4>{topic.name}</h4>
			<p>{topic.description}</p></Link>
		});
	},
	onChange:function(event, topics){ //here topics is new data
		this.setState({
			topics:topics
		});
	}	
});