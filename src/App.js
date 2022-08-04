import logo from './logo.svg';
import Fixed from './Fixed';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from './Page';

function App() {
  return (
    
    
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Fixed} />
                    <Route path="/page" exact component={Page} />
                  
                    
                    
                
                </Switch>
            </BrowserRouter>
   );
}

export default App;
