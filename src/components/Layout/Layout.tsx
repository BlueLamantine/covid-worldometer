import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
export const Layout = () => {
    return (
        <div className="content">
            <Outlet />
            <Footer />
        </div>
    );
};
