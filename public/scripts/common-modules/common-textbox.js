(function () {
    'use strict';

    com.pearson.common["ReactBox"] = React.createClass({
        render: function () {
            return (
                <input className="mstextbox" type="text" value={this.props.intialVal}/>
            );
        }
    });

})();
