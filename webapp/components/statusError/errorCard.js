var React = require('react');

var errorCard = React.createClass({
    render: function(){
        var classLi = "md-cell mdl-cell--6-col mdl-list__item mdl-list__item--three-line mdl-shadow--4dp"
        classLi += ' mdl-list__item--error-family-'+ Math.floor(this.props.data['response_code'] / 100)
        var classI = "material-icons mdl-list__item-avatar mdl-color--red item-"+this.props.data['api']
        return(
            <div className={classLi}>
                <span className="mdl-list__item-primary-content">
                    <i className={ classI }>error</i>
                    <span>{ this.props.data['api'] }</span>
                    <span className="mdl-list__item-timestamp">{ this.props.data['timestamp'] }</span>
                    <span className="mdl-list__item-text-body">
                        { this.props.data['service'] }
                    </span>
                </span>
                <span className="mdl-list__item-secondary-action">
                    <span className="mdl-typography--display-1">{ this.props.data['response_code']  }</span>
                </span>
            </div>
        )
    }
});

module.exports = errorCard;