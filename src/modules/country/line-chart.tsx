import './styles/line-chart.scss';
import { Chart } from 'react-google-charts';
import { useAppSelector } from '../../store/hooks';
import { getStatisticsPoints } from './service/selectors';

const legends = ['Day', 'New confirmed', 'New deaths', 'New recovered'];

const options = {
    title: 'COVID statistics by day(s)',
    width: 900,
    height: 500,
    legend: { position: 'bottom' },
};

const LineChart = () => {
    const statisticsPoints = useAppSelector(getStatisticsPoints);
    return (
        <div className="line-chart">
            {statisticsPoints.length ? (
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={[legends, ...statisticsPoints]}
                    options={options}
                />
            ) : (
                <p className="line-chart__empty">
                    There are no data for the last day yet, please choose other
                    dates.
                </p>
            )}
        </div>
    );
};

export default LineChart;
