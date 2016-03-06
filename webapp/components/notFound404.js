var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var notFound404 = React.createClass({
    render() {
        return (
            <div className="mdl-grid root-cantainer ">
                <div className="mdl-cell mdl-cell--2-col">
                </div>
                <div className="mdl-cell mdl-cell--8-col mdl-shadow--2dp container-main mdl-color--grey-100">
                    <h1>404</h1>
                    <p>We cannot find the page that you have requested.</p>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                </div>
            </div>
        );
    }
});

module.exports = notFound404;