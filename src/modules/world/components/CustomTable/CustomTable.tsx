import './CustomTable.scss';
import { SummaryOfCountry, TableHeaders } from '../../../../typedef';
import { TABLE_ROWS_NUM } from '../../constants';
import { Link } from 'react-router-dom';
interface Props {
    countries: SummaryOfCountry[];
}
export const CustomTable = ({ countries }: Props) => {
    return (
        <table className="main-table">
            <thead>
                <tr>
                    {Object.values(TableHeaders).map(header => (
                        <th
                            key={header}
                            style={
                                header === 'Country' ? { width: '150px' } : {}
                            }
                        >
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {countries.length ? (
                    countries
                        .map(item => {
                            const {
                                ID,
                                Country,
                                TotalConfirmed,
                                TotalDeaths,
                                TotalRecovered,
                                Slug,
                            } = item;
                            return (
                                <tr key={ID}>
                                    <td>
                                        <Link
                                            className="table-link"
                                            to={`/${Slug}`}
                                        >
                                            {Country}
                                        </Link>
                                    </td>
                                    <td>{TotalConfirmed}</td>
                                    <td>{TotalDeaths}</td>
                                    <td>{TotalRecovered}</td>
                                </tr>
                            );
                        })
                        .slice(0, TABLE_ROWS_NUM)
                ) : (
                    <tr>
                        <td colSpan={Object.values(TableHeaders).length}>
                            No results
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
