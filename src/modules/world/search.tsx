import { FormEvent, useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { SummaryOfCountry } from '../../typedef';
import { CustomTable } from './components/CustomTable';

interface Props {
    summaries: SummaryOfCountry[];
}
export const Search = ({ summaries }: Props) => {
    const [searchCountry, setSearchCountry] = useState<string>('');
    const [searchResults, setSearchResults] =
        useState<SummaryOfCountry[]>(summaries);

    const handleSearch = (e: FormEvent<HTMLInputElement>) => {
        setSearchCountry(e.currentTarget.value);
    };

    useEffect(() => {
        const results = summaries
            .filter(summaryOfCountry =>
                summaryOfCountry.Country.toLowerCase().startsWith(
                    searchCountry.toLocaleLowerCase()
                )
            )
            .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);

        setSearchResults(results);
    }, [searchCountry, summaries]);

    return (
        <div className="country-search">
            <Input
                type="text"
                onChange={handleSearch}
                placeholder="Search by country"
                value={searchCountry}
            />
            <CustomTable countries={searchResults} />
        </div>
    );
};
