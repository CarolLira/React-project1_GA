import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Hello from './Hello';
import Error from './Error';
import Form from './Form';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/hello" component={Hello}/>
                <Route path="/form" component={Form}/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}