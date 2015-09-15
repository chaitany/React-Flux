
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');
var Reflux = require('reflux');
var Topicstore = require('../stores/topicstore');


module.exports = React.createClass({
	mixins:[
		Reflux.listenTo(Topicstore, 'onChange')
	],
	getInitialState:function(){
		return {
			topics:[]
		}
	},
	componentWillMount:function(){
		Actions.getTopics();
	},
	render:function(){
		return <div><Link to="/">Imgur</Link>
		<ul className="nav navbar-nav navbar-right">
		{this.renderTopics()}</ul>
		</div>
	},
	renderTopics:function(){
		//used 'slice' to get first four topics
		return this.state.topics.slice(0,4).map(function(topic){
			return <li key={topic.id}>
			<Link activeClassName="active" to={"topics/" + topic.id}>
			{topic.name}
			</Link>
			</li>
		});
	},
	onChange: function(event, topics){
	this.setState({
		topics:topics
	});
   }
});
