import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ './gogo')
);
const SecondMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
);
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './blank-page')
);
const ParentMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './parentMenu')
);
const FormMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './FormMenu')
);
const View = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './View')
);
const ViewForm = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './ViewForm')
);
const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/gogo`} />
            <Route
              path={`${match.url}/gogo`}
              render={(props) => <Gogo {...props} />}
            />
            <Route
              path={`${match.url}/second-menu`}
              render={(props) => <SecondMenu {...props} />}
            />
            {/* <ProtectedRoute
                    path={`${match.url}/second-menu`}
                    component={SecondMenu}
                    roles={[UserRole.Admin]}
            /> */}
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Route
              path={`${match.url}/parent-menu`}
              exact
              render={(props) => <ParentMenu {...props} />}
            />
             <Route
              path={`${match.url}/parent-menu/form-menu`}
              render={(props) => <FormMenu {...props} />}
            />
             <Route
              path={`${match.url}/view`}
              exact
              render={(props) => <View {...props} />}
            />
             <Route
              path={`${match.url}/view/view-form`}
              render={(props) => <ViewForm {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
