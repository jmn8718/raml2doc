var React = require('react');

var docFactory = React.createClass({
    getInitialState: function(){
      return {
          uriRequest:'',
          generatedContent:'content',
          hasGeneratedContent:false,
          messageLoading: '',
          loading: false,
          messageError: '',
          error: false,
          url: '',
          apiName: '',
          overviewLink:'',
          termsLink:'',
          baseUri:'',
          environment:'',
          template:'customDoc',
          quickstart:'general',
          clipboard: undefined
      }
    },
    componentDidMount:function(){
        var that = this
        setTimeout(function(){
            that.setState({clipboard:new Clipboard('.btn-copy')})
            //this.state.clipboard = new Clipboard('.btn-copy');
            if(componentHandler!==undefined)
                componentHandler.upgradeDom();
            //that.setState({loading:false})
            //console.log(that.state.clipboard)
        },150);

    },
    componentWillUnmount:function(){
        this.state.clipboard.destroy()
    },
    handleChange: function(event) {
        //console.log(event.target)
        var state = {}
        if(event.target.id === 'url')
            state = { url: event.target.value}
        else if (event.target.id === 'apiName')
            state = { apiName: event.target.value}
        else if (event.target.id === 'overview')
            state = { overviewLink: event.target.value}
        else if (event.target.id === 'terms')
            state = { termsLink: event.target.value}
        else if (event.target.id === 'baseUri')
            state = { baseUri: event.target.value}
        else if (event.target.id === 'environment')
            state = { environment: event.target.value}
        else if (event.target.id.indexOf('quickstart') > -1)
            state = { quickstart: event.target.value}
        else if (event.target.id.indexOf('template') > -1)
            state = { template: event.target.value}
        this.setState(state);
    },
    handleSubmit: function(e){
        e.preventDefault();
        var url = this.state.url.trim();
        var apiName = this.state.apiName.trim();
        var overviewLink = this.state.overviewLink.trim();
        var termsLink = this.state.termsLink.trim();
        var baseUri = this.state.baseUri.trim();
        var environment = this.state.environment.trim();
        var quickstart = this.state.quickstart;
        var template = this.state.template;
        if(url.length <= 0){
            this.setError('Introduce a valid url.')
        } else if(apiName.length <= 0){
            this.setError('Introduce a name for the api.')
        } else if(template.length <= 0){
            this.setError('Select a template.')
        } else {
            var urlApi = '/'+template
            urlApi += '/raml?url='+url+'&apiName='+apiName+'&quickstart='+quickstart
            if(environment.length>0)
                urlApi+='&environment='+environment
            if(baseUri.length>0)
                urlApi+='&baseUri='+baseUri
            if(termsLink.length>0)
                urlApi+='&termsLink='+termsLink
            if(overviewLink.length>0)
                urlApi+='&overviewLink='+overviewLink
            if(template.length>0)
                urlApi+='&template='+template
            console.log(url)
            this.setState({uriRequest:urlApi})
            if(template.length>0 && template==='docFactory'/* && template==='raml2html'*/){
                this.openNewWindowOnClick(urlApi)
            } else {
                this.setState({
                    loading:true,
                    messageLoading:'Generating the documentation, please wait a little...'
                });
                $.ajax({
                    url: urlApi,
                    //dataType: 'json',
                    cache: false,
                    success: function(data) {
                        //console.log(data.data)
                        this.setState({
                            generatedContent:data,
                            hasGeneratedContent: true,
                            loading:false,
                            messageLoading: ''
                        });
                    }.bind(this),
                    error: function(xhr, status, err) {
                        console.error( status, err.toString());
                        this.setState({
                            loading:false,
                            messageLoading: ''
                        });
                        this.setError(err.toString())
                    }.bind(this)
                });
            }
        }
    },
    clearContent:function(){
        this.setState({
            generatedContent:'',
            hasGeneratedContent: false,
        });
    },
    openNewWindowOnClick:function(url){
        var uri = (url!== undefined) ? url : this.state.uriRequest
        var tab = window.open(uri,'_blank');
        tab.focus();
    },
    setError: function(msg){
        this.setState({error:true, messageError: msg});
        setTimeout((function(){
            this.setState({error:false, messageError: ''});
        }).bind(this),10000);
    },
    render: function(){
        return(
            <div className="mdl-grid root-cantainer">
                <div className={this.state.loading ? "error-message mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-color--green-50" : "hidden"}>
                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
                    <p>{this.state.messageLoading}</p>
                </div>
                <div className={this.state.error ? "error-message mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-color--red-200" : "hidden"}>
                    <p>{this.state.messageError}</p>
                </div>
                <div className="mdl-grid">
                    <div className={this.state.hasGeneratedContent ? "hidden" : "mdl-cell mdl-cell--2-col"}>
                    </div>
                    <div className={this.state.hasGeneratedContent ? "mdl-cell mdl-cell--4-col mdl-shadow--2dp container-main mdl-color--grey-100" : "mdl-cell mdl-cell--8-col mdl-shadow--2dp container-main mdl-color--grey-100"}>
                        <form  onSubmit={this.handleSubmit}>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="url" id="url" ref="url" onChange={this.handleChange}></input>
                                <label className="mdl-textfield__label" htmlFor="url">URL</label>
                                <div className="mdl-tooltip mdl-tooltip--bottom" htmlFor="url">
                                    (Required) Introduce the url of the RAML
                                </div>

                            </div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="text" id="apiName" ref="apiName" onChange={this.handleChange} ></input>
                                <label className="mdl-textfield__label" htmlFor="apiName">API Name</label>
                                <div className="mdl-tooltip mdl-tooltip--bottom" htmlFor="apiName">
                                    (Required) Introduce the Api name
                                </div>
                            </div>

                            <div className="mdl-textfield" >
                                <span className="mdl-radio__label mdl-color-text--primary" id="template-checkbox-label">Template</span>
                                <div className="mdl-tooltip mdl-tooltip--bottom" htmlFor="template-checkbox-label">
                                    (Required) Check the option for the template of the documentation
                                </div>
                                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="template-1">
                                    <input type="radio" id="template-1" className="mdl-radio__button" name="template" value="docFactory" ref="template" onChange={this.handleChange}/>
                                    <span className="mdl-radio__label">raml2html</span>
                                </label>
                                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="template-2">
                                    <input type="radio" id="template-2" className="mdl-radio__button" name="template" value="custom" ref="template" onChange={this.handleChange} defaultChecked/>
                                    <span className="mdl-radio__label">custom</span>
                                </label>
                                <p>Selecting raml2html will open a new tab. Selecting custom it will load the html code in the right side.</p>
                            </div>

                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                                GENERATE
                            </button>

                        </form>
                    </div>
                    <div className={this.state.hasGeneratedContent ? "hidden" : "mdl-cell mdl-cell--2-col" }>
                    </div>
                    <div className={this.state.hasGeneratedContent ? "mdl-cell mdl-cell--8-col mdl-shadow--2dp mdl-color--grey-100" : "hidden"}>
                        <div className="mdl-grid">
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored btn-copy" data-clipboard-action="copy" data-clipboard-target="#code-container">
                                COPY HTML
                            </button>
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.openNewWindowOnClick}>
                                VIEW FULL
                            </button>
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.clearContent}>
                                CLEAR
                            </button>
                        </div>
                        <div className="mdl-grid">
                            <code className="mdl-cell mdl-cell--12-col mdl-color--grey-400 code-container" id="code-container">{this.state.generatedContent}</code>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = docFactory;