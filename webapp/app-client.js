var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var APP = require('./components/container');
var home = require('./components/home');
var docFactory = require('./components/docFactory');
var errorStatus = require('./components/errorStatus');
var notFound404 = require('./components/notFound404');

var Header = require('./components/parts/Header');

var APP = React.createClass({
    getInitialState: function(){
        return {
            title: 'raml2doc',
            status: 'develop'
        }
    },
    render: function(){
        return(
            <div>
                <Header title={this.state.title} status={this.state.status} />
                <RouteHandler {...this.state}/>
            </div>
        );
    }
});

var routes = (
    <Route handler={APP}>
        <DefaultRoute handler={home} />
        <Route name="docFactory" path="docFactory" handler={docFactory}></Route>
        <Route name="error_status" path="error_status" handler={errorStatus}></Route>
        <NotFoundRoute handler={notFound404} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('react-container'));
});


