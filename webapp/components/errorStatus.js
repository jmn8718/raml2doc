var React = require('react');

var ErrorList = require('./statusError/errorList')

var docFactory = React.createClass({
    getInitialState: function(){
        return {
            data: [
                //{
                //    service: 'get',
                //    api: 'de',
                //    response_code: 500,
                //    timestamp: 'now'
                //} ,
                //{
                //    service: 'post',
                //    api: 'as',
                //    response_code: 400,
                //    timestamp: 'yesterday'
                //}
            ]
        }
    },
    componentWillMount:function(){
        this.getData();
    },
    getData:function(){
        $.ajax({
            url: '/statusError/file/errors_apimarket.csv',
            dataType: 'json',
            cache: false,
            success: function(data) {
                //console.log(data.data)
                this.setState({data: data.data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error( status, err.toString());
            }.bind(this)
        });
    },
    render: function(){
        return(
            <div className="mdl-grid root-cantainer">
                <div className="mdl-cell mdl-cell--2-col">
                </div>
                <div className="mdl-cell mdl-cell--8-col mdl-shadow--2dp container-main mdl-color--grey-100">
                    <ErrorList data={this.state.data}/>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                </div>
            </div>
        )
    }
});

module.exports = docFactory;