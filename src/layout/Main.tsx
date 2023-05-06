import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Sidebar from '../components/shared/Sidebar';

const Main = () => {
    return (
        <div className='row g-0'>
            <div className='col'>
                <Sidebar />
            </div>
            <div className='col-md-10'>
                <Navbar />
                <div className='p-4'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Main;