var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var home = React.createClass({
    render() {
        return (
            <div className="mdl-grid root-cantainer">
                <div className="mdl-cell mdl-cell--2-col">
                </div>
                <div className="mdl-cell mdl-cell--8-col mdl-shadow--2dp container-main mdl-color--grey-100">
                    <p>Website developed with ReactJS and Material design lite</p>
                    <p>Click on the links in the header to go to:</p>
                    <p><span>docFactory</span> - To generate a template of a RAML<br/>
                        You can use one of the following ramls:<br/>
                        https://raw.githubusercontent.com/raml-org/raml-tutorial-200/master/jukebox-api.raml<br/>
                        https://raw.githubusercontent.com/scaganoff/example-eventlog-api/master/eventlog.raml
                    </p>
                    <p><span>Errors</span> - To see a list of errors</p>
                    <p>Check the code of this site in the github repository <a href="https://github.com/jmn8718/raml2doc" target="_blank">github.com/jmn8718/raml2doc</a></p>
                    <p>If you want to know about me, check my personal page in <a href="http://josemiguelnavarro.herokuapp.com/" target="_blank">josemiguelnavarro.herokuapp.com/</a></p>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                </div>
            </div>
        );
    }
});

module.exports = home;