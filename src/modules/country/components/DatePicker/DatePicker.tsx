import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import { START_DATE_OF_STATISTICS } from '../../contstants';

interface Props {
    onDateChange: (item: [Range]) => void;
    date: [Range];
    maxDateToPick: Date;
}

export const DatePicker = ({ onDateChange, date, maxDateToPick }: Props) => {
    return (
        <div>
            <DateRange
                onChange={(item: RangeKeyDict) =>
                    onDateChange([item.selection])
                }
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={date}
                direction="horizontal"
                maxDate={maxDateToPick}
                minDate={new Date(START_DATE_OF_STATISTICS)}
            />
        </div>
    );
};
