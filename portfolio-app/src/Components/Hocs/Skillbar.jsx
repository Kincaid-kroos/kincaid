import LinearProgress from "@mui/material/LinearProgress";
import PropTypes from 'prop-types';

const SkillBar = ({ skill, percentage }) => {
    return (
        <div>
            <h3>{skill}</h3>
            <LinearProgress
                variant="determinate"
                value={percentage}
            />
        </div>
    );
};

SkillBar.propTypes = { 
    skill: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};

export default SkillBar;
