import './MainCounter.scss';
import { Global } from '../../../../typedef';
import { timer } from '../../../../utils/date-formatting';
interface Props {
    globalInfo: Global | undefined;
}
export const MainCounter = ({ globalInfo }: Props) => {
    return (
        <div className="main-counter">
            <h4 className="counter__title">Global Situation</h4>
            <div className="counter__data">
                {globalInfo &&
                    Object.entries(globalInfo).map(([title, value]) => {
                        return (
                            <div className="counter__data-item" key={title}>
                                {title !== 'Date'
                                    ? `${title} : ${value}`
                                    : `updated ${timer(value)}`}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
