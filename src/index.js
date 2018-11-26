import React from 'react';
import { render } from 'react-dom';
import { 
  Route, 
  Switch, 
  BrowserRouter,
} from 'react-router-dom';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';

import './style.css';

import Home from './Home';
import About from './About';

const supportsHistory = 'pushState' in window.history;

const App = ({  }) => (
  <BrowserRouter forceRefresh={!supportsHistory}>
    <div>
      
      <main>
        <Route
          render={({ location }) => {
            const { pathname } = location;
            return (
              <TransitionGroup>
                <CSSTransition 
                  key={pathname}
                  classNames="page"
                  timeout={{
                    enter: 1000,
                    exit: 1000,
                  }}
                >
                  <Route
                    location={location}
                    render={() => (
                      <Switch>
                        <Route
                          exact
                          path="/"
                          component={Home}
                        />
                      
                        <Route
                          path="/about/:id"
                          component={About}
                        />

                      </Switch>
                    )}
                  />
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </main>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
