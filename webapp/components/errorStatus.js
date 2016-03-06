var React = require('react');

var docFactory = React.createClass({
    render: function(){
        return(
            <div className="mdl-grid root-cantainer">
                <div className="mdl-cell mdl-cell--2-col">
                </div>
                <div className="mdl-cell mdl-cell--8-col mdl-shadow--2dp container-main mdl-color--grey-100">
                    <h1>Error Status</h1>
                    <p>Here you can see the 500's errors.</p>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                </div>
            </div>
        )
    }
});

module.exports = docFactory;