import './styles/world.scss';
import { lazy, useEffect } from 'react';
import { loadCOVIDStatisticsThunk } from './service/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectGlobalInfo, selectSummaries } from './service/selectors';
import { withSuspense } from '../../hoc/withSuspense';
import { MainCounter } from './components/MainCounter';
import { Search } from './search';

const WorldMap = withSuspense(lazy(() => import('./world-map')));

const World = () => {
    const dispatch = useAppDispatch();

    const globalInfo = useAppSelector(selectGlobalInfo);
    const summaries = useAppSelector(selectSummaries);
    useEffect(() => {
        if (!globalInfo) {
            dispatch(loadCOVIDStatisticsThunk());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h2 className="main-title">COVID-19 CORONAVIRUS PANDEMIC</h2>
            <div className="main-content">
                <div className="main-content__summary">
                    <MainCounter globalInfo={globalInfo} />
                    <Search summaries={summaries} />
                </div>
                <WorldMap />
            </div>
        </>
    );
};

export default World;
