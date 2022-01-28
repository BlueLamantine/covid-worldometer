import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useEffect, useState } from 'react';
import { DatePicker } from './components/DatePicker';
import { Range } from 'react-date-range';
import { useAppDispatch } from '../../store/hooks';
import { loadCountryDetailsThunk } from './service/actions';
import {
    formattingDate,
    formattingDateBefore,
    dateYesterday,
} from '../../utils/date-formatting';

interface Props {
    currentCountry: string;
}

export const Calendar = ({ currentCountry }: Props) => {
    const dispatch = useAppDispatch();
    const [date, setDate] = useState<[Range]>([
        {
            startDate: dateYesterday,
            endDate: dateYesterday,
            key: 'selection',
        },
    ]);
    useEffect(() => {
        const [{ startDate, endDate }] = date;
        if (currentCountry) {
            dispatch(
                loadCountryDetailsThunk({
                    countryName: currentCountry,
                    startDate: formattingDateBefore(startDate),
                    endDate: formattingDate(endDate),
                })
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date, currentCountry]);

    return (
        <div className="calendar">
            <DatePicker
                onDateChange={setDate}
                date={date}
                maxDateToPick={dateYesterday}
            />
        </div>
    );
};
