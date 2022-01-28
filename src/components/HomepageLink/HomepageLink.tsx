import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

export const HomepageLink = () => {
    return (
        <Link to="/" className="country-view__link">
            <BiArrowBack /> Back to map
        </Link>
    );
};
