(function () {
    'use strict';

    var MsPlayer = React.createClass({
        render: function () {
            return (
                <div>
                    <h1>Inside the MsPlayer Component</h1>
                    <com.pearson.common.ReactLabel label="Hi from common lable component"/>
                    <com.pearson.common.ReactBox intialVal="text of common text box component"/>
                </div>
            );
        }
    });


    ReactDOM.render(<MsPlayer />, document.getElementById('assignment-player'));

})();