import { lazy } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Routes, Route } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

const World = withSuspense(lazy(() => import('./modules/world')));
const Country = withSuspense(lazy(() => import('./modules/country')));
function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={
                            <ErrorBoundary moduleName="World">
                                <World />
                            </ErrorBoundary>
                        }
                    />
                    <Route
                        path="/:country"
                        element={
                            <ErrorBoundary moduleName="Country">
                                <Country />
                            </ErrorBoundary>
                        }
                    />
                </Route>
            </Routes>
           
        </Provider>
    );
}

export default App;
