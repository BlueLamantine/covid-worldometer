import { memo } from 'react';
import { SummaryOfCountry } from '../../../../typedef';
import { Link } from 'react-router-dom';
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography,
} from 'react-simple-maps';
import { GEO_URL } from '../../constants';
import { Dictionary } from '@reduxjs/toolkit';
import { scaleLinear } from 'd3-scale';

interface Props {
    setTooltipCountry: (countryName: string) => void;
    summariesEntities: Dictionary<SummaryOfCountry>;
}

const colorScale = scaleLinear<string>()
.domain([0, 0.3])
.range(['#f5d020', '#f53803']);

const MapChart = ({
    setTooltipCountry,
    summariesEntities,
}: Props) => {
    return (
        <ComposableMap data-tip="" projectionConfig={{ scale: 180 }}>
            <ZoomableGroup>
                <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const { NAME_LONG, ISO_A2, POP_EST } =
                                geo.properties;
                            const url = NAME_LONG.toLowerCase().replace(
                                /\s/g,
                                '-'
                            );
                            const totalConfirmed =
                                summariesEntities[ISO_A2]?.TotalConfirmed || 0;
                            return (
                                <Link key={geo.rsmKey} to={ totalConfirmed ? `/${url}` : '#'} >
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={
                                            totalConfirmed
                                                ? colorScale(
                                                      totalConfirmed / POP_EST
                                                  )
                                                : 'lightgray'
                                        }
                                        onMouseEnter={() => {
                                            setTooltipCountry(ISO_A2);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipCountry('');
                                        }}
                                        style={{
                                            hover: {
                                                fill: 'gray',
                                                outline: 'none',
                                            },
                                        }}
                                    />
                                </Link>
                            );
                        })
                    }
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default memo(MapChart);
