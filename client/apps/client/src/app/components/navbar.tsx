import { Link } from 'react-router-dom';
import AcademicCapIcon from '@heroicons/react/24/outline/AcademicCapIcon';

export const Navbar = () => {
    // Style object for the navigation links.
    const linkStyle = {
        display: 'flex',
        alignItems: 'center', 
        gap: '8px', 
        color: 'inherit', 
    };

    return (
        // The navigation bar containing links to different pages.
        <nav style={{
            display: 'flex',
            height: '64px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderBottom: '1px solid #ccc',
            padding: '0.5rem',
        }}>
            {/* Link to the homepage with an icon and text. */}
            <Link to="/" style={linkStyle}>
                <AcademicCapIcon style={{ width: '24px', height: '24px' }} />
                <span>pomodoro</span>
            </Link>

            {/* Link to the FiftyToTen page with an icon and text. */}
            <Link to="/FiftyToTen" style={linkStyle}>
                <AcademicCapIcon style={{ width: '24px', height: '24px' }} />
                <span>fiftytoten</span>
            </Link>

            {/* Link to the Blocking page with an icon and text. */}
            <Link to="/Blocking" style={linkStyle}>
                <AcademicCapIcon style={{ width: '24px', height: '24px' }} />
                <span>Blocking</span>
            </Link>
        </nav>
    );
};
