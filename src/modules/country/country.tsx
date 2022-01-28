import './styles/country.scss';
import { useParams } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadCountriesThunk } from './service/actions';
import { selectCountry } from './service/selectors';
import { HomepageLink } from '../../components/HomepageLink';
import { Calendar } from './calendar';
import { withSuspense } from '../../hoc/withSuspense';
import { NotFound } from '../../components/NotFound';

const LineChart = withSuspense(lazy(() => import('./line-chart')));

const Country = () => {
    const { country } = useParams<'country'>();
    const dispatch = useAppDispatch();

    const countryInfo = useAppSelector(selectCountry(country || ''));

    useEffect(() => {
        if (!countryInfo) {
            dispatch(loadCountriesThunk());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="country-view">
            <HomepageLink />
            {countryInfo ? (
                <>
                    <h4>{countryInfo.Country}</h4>
                    <div className="country-view__content">
                        <Calendar currentCountry={countryInfo.Slug} />
                        <LineChart />
                    </div>
                </>
            ) : (
                <NotFound />
            )}
        </div>
    );
};
export default Country;
