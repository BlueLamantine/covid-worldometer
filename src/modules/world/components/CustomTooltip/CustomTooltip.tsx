import ReactTooltip from 'react-tooltip';
import { SummaryOfCountry } from '../../../../typedef';

interface Props {
    country: SummaryOfCountry | undefined;
}
export const CustomTooltip = ({ country }: Props) => {
    return (
        <div className="country-tooltip">
            <ReactTooltip>
                {country ? (
                    <>
                        <h4>{country.Country}</h4>
                        <div>New Confirmed: {country.NewConfirmed}</div>
                        <div>Total Confirmed: {country.TotalConfirmed}</div>
                        <div>New Deaths: {country.NewDeaths}</div>
                        <div>Total Deaths: {country.TotalDeaths}</div>
                    </>
                ) : (
                    'No data'
                )}
            </ReactTooltip>
        </div>
    );
};
