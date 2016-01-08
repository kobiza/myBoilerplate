require.config({
    baseUrl: 'scripts',
    paths: {
        react: 'lib/react-0.13.3.min',
        jquery: 'lib/jquery.min',
        lodash: 'lib/lodash.min'
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});


define(['react', 'components/myApp'], function (React, myApp) {
    React.render(React.createElement(myApp, null), document.getElementById('app'));
});
