import React from 'react';
import { hydrate } from 'react-dom';
import Appcomponent from 'component/app';

hydrate(<Appcomponent />, document.getElementById('app'));
