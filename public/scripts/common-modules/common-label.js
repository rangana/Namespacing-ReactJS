(function () {
    'use strict';

    com.pearson.common["ReactLabel"] = React.createClass({
        render: function () {
            return (
                <h1 className="mslabel">{this.props.label}</h1>
            )
        }
    });

})();
