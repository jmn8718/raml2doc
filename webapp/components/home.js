var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var notFound404 = React.createClass({
    render() {
        return (
            <div className="mdl-grid root-cantainer">
                <div className="mdl-cell mdl-cell--2-col">
                </div>
                <div className="mdl-cell mdl-cell--8-col mdl-shadow--2dp container-main mdl-color--grey-100">
                    <h1>HOME</h1>
                    <p>Welcome to our page.</p>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                </div>
            </div>
        );
    }
});

module.exports = notFound404;