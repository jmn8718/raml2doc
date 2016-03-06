var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    getDefaultProps() {
        return {
            status: 'disconnected'
        }
    },
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">{this.props.title}</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            <Link to="/" className="mdl-navigation__link" >Home</Link>
                            <Link to="/docFactory" className="mdl-navigation__link" >docFactory</Link>
                            <Link to="/error_status" className="mdl-navigation__link" >Errors</Link>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">{this.props.title}</span>
                    <nav className="mdl-navigation">
                        <Link to="/" className="mdl-navigation__link" >Home</Link>
                        <Link to="/docFactory" className="mdl-navigation__link" >docFactory</Link>
                        <Link to="/error_status" className="mdl-navigation__link" >Errors</Link>
                    </nav>
                </div>
            </div>
        );
    }

});

module.exports = Header;