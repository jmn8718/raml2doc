var React = require('react');

var docFactory = React.createClass({
    componentDidMount:function(){
        //We have to upgrade the js elements
        componentHandler.upgradeDom();
    },
    render: function(){
        return(
            <div className="mdl-grid root-cantainer">
                <div className="mdl-cell mdl-cell--2-col">
                </div>
                <div className="mdl-cell mdl-cell--8-col mdl-shadow--2dp container-main mdl-color--grey-100">
                    <form action="#">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="url" required></input>
                            <label className="mdl-textfield__label" htmlFor="url">URL</label>
                            <div className="mdl-tooltip mdl-tooltip--bottom" htmlFor="url">
                                (Required) Introduce the url of the RAML
                            </div>

                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="api" required></input>
                            <label className="mdl-textfield__label" htmlFor="api">API Name</label>
                            <div className="mdl-tooltip mdl-tooltip--bottom" htmlFor="api">
                                (Required) Introduce the Api name
                            </div>
                        </div>

                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="overview"></input>
                            <label className="mdl-textfield__label" htmlFor="overview">Overview Link</label>
                            <div className="mdl-tooltip mdl-tooltip--bottom" htmlFor="overview">
                                (Optional) Introduce the url for the overview link
                            </div>
                        </div>

                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="terms"></input>
                            <label className="mdl-textfield__label" htmlFor="terms">Terms and Conditions Link</label>
                            <div className="mdl-tooltip mdl-tooltip--bottom" htmlFor="terms">
                                (Optional) Introduce the url for the terms and conditions link
                            </div>
                        </div>

                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="baseUri"></input>
                            <label className="mdl-textfield__label" htmlFor="baseUri">Base Uri</label>
                            <div className="mdl-tooltip mdl-tooltip--bottom" htmlFor="baseUri">
                                (Optional) Introduce the base uri to set in your documentation. It will replace the base uri in your raml.
                            </div>
                        </div>

                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="environment"></input>
                            <label className="mdl-textfield__label" htmlFor="environment">Environment</label>
                            <div className="mdl-tooltip mdl-tooltip--bottom" htmlFor="environment">
                                (Optional) Introduce the environment word for your api. It will set your base uri to "apis.bbva.com", and the environment you provide will be added to "".
                            </div>
                        </div>

                        <div className="mdl-textfield" >
                            <span className="mdl-radio__label mdl-color-text--primary" id="quickstart-checkbox-label">Quickstart</span>
                            <div className="mdl-tooltip mdl-tooltip--bottom" htmlFor="quickstart-checkbox-label">
                                (Required) Check the option to introduce a quickstart section in your documentation
                            </div>
                            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="quickstart-1">
                                <input type="radio" id="quickstart-1" className="mdl-radio__button" name="quickstart" value="no" />
                                    <span className="mdl-radio__label">No</span>
                            </label>
                            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="quickstart-2">
                                <input type="radio" id="quickstart-2" className="mdl-radio__button" name="quickstart" value="paystats" defaultChecked/>
                                    <span className="mdl-radio__label">Paystats</span>
                            </label>
                            <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="quickstart-3">
                                <input type="radio" id="quickstart-3" className="mdl-radio__button" name="quickstart" value="general"/>
                                    <span className="mdl-radio__label">General</span>
                            </label>

                        </div>

                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                            GENERATE
                        </button>

                    </form>

                </div>
                <div className="mdl-cell mdl-cell--2-col">
                </div>
            </div>
        )
    }
});

module.exports = docFactory;