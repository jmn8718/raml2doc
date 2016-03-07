var React = require('react');

var ErrorCard = require('./errorCard')

var errorList = React.createClass({
    render: function(){
        return (
            <div className="mdl-grid">
                {this.props.data.map(function(record, index){
                    return(
                        <ErrorCard key={index} data={record}/>
                    )
                })}
            </div>
        );
    }
});

module.exports = errorList;