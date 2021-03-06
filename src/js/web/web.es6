﻿var React = require('react');

import {Module} from '../index.js';

const render = () => React.render(
    (<div>
        <Module.Components.Jumbotron headline='Jumbotron' />
        <Module.Components.Alert message='some danger message' type='danger' />
        <Module.Components.Alert message='some success message' type='success' />
    </div>),
    document.getElementById('main')
);

render();