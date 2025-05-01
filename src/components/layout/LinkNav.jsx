import { Link } from 'react-router-dom'

export default function LinkNav({ to, children }) {
    return (
        <Link to={to} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
            {children}
        </Link>
    );
}
