import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, showAddTask, toggleFormVisibility }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={showAddTask ? 'Close' : 'Add'} color={showAddTask ? 'red' : 'green'} onClick={toggleFormVisibility} />
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: 'ToDo'
};

export default Header;
