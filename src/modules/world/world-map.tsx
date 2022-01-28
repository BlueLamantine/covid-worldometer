import './styles/world-map.scss';
import MapChart from './components/MapChart';
import { useEffect, useState } from 'react';
import { SummaryOfCountry } from '../../typedef';
import { CustomTooltip } from './components/CustomTooltip';
import { useAppSelector } from '../../store/hooks';
import {
    selectSummariesEntities,
    selectSummaryById,
} from './service/selectors';

const WorldMap = () => {
    const [activeCountry, setActiveCountry] = useState<string>('');
    const [content, setTooltipContent] = useState<SummaryOfCountry | undefined>(
        undefined
    );

    const summaryOfCountry = useAppSelector(
        selectSummaryById(activeCountry || '')
    );
    const summariesEntities = useAppSelector(selectSummariesEntities);

    useEffect(() => {
        setTooltipContent(summaryOfCountry || undefined);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCountry]);

    return (
        <div className="world-map__wrapper">
            <MapChart
                setTooltipCountry={setActiveCountry}
                summariesEntities={summariesEntities}
            />
            {activeCountry && <CustomTooltip country={content} />}
        </div>
    );
};
export default WorldMap;
