
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { name as appName } from '../app.json';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

import Home from './screens/Home';

Navigation.registerComponentWithRedux(`Home`, () => Home, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "Home"
            }
        },
    });
    Navigation.setDefaultOptions({
        layout: {
            orientation: ['portrait']
        }
    });

});