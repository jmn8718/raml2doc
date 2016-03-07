var React = require('react');

var ErrorCard = require('./errorCard')

var errorList = React.createClass({
    render: function(){
        return (
            <div className="mdl-grid">
                <ul className="mdl-list">
                    {this.props.data.map(function(record){
                        return(
                            <ErrorCard key={record.timestamp} data={record}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = errorList;