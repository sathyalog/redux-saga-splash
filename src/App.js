import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

import configureStore from './store';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                <React.Fragment>
                    <Header />
                    <ImageGrid />
                    </React.Fragment>
                </Provider>
            </div>
        );
    }
}

export default App;
