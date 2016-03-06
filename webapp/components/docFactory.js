var React = require('react');

var docFactory = React.createClass({
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



                        <div className="">
                            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="quickstart">
                                <input type="checkbox" id="quickstart" className="mdl-switch__input"/>
                                <span className="mdl-switch__label mdl-color-text--primary">Quickstart</span>
                            </label>
                        </div>

                    </form>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                </div>
            </div>
        )
    }
});

module.exports = docFactory;