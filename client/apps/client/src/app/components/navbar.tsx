import { Link } from 'react-router-dom';
import AcademicCapIcon from '@heroicons/react/24/outline/AcademicCapIcon';

export const Navbar = () => {
    const linkStyle = {
        display: 'flex',
        alignItems: 'center', 
        gap: '8px', 
        color: 'inherit', 
    };

    return (
        <nav style={{
            display: 'flex',
            height: '64px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderBottom: '1px solid #ccc',
            padding: '0.5rem',
        }}>
            <Link to="/" style={linkStyle}>
                <AcademicCapIcon style={{ width: '24px', height: '24px' }} />
                <span>pomodoro</span>
            </Link>

            <Link to="/FiftyToTen" style={linkStyle}>
                <AcademicCapIcon style={{ width: '24px', height: '24px' }} />
                <span>fiftytoten</span>
            </Link>

            <Link to="/Blocking" style={linkStyle}>
                <AcademicCapIcon style={{ width: '24px', height: '24px' }} />
                <span>Blocking</span>
            </Link>
        </nav>
    );
};
