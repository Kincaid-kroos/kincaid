import LinearProgress from "@mui/material/LinearProgress";
import PropTypes from 'prop-types';
import '../Styles/Skillbar.css';

const SkillBar = ({ skill, percentage }) => {

    const fillWidth = `${percentage}%`;

    const barstyles = {
        height:10,
        backgroundColor: '#fff',
        '& .MuiLinearProgress-bar': {
            backgroundColor: '#27AE60', // Custom background color
        
        },
    };

    return (
        
        <div className="skillbar-container">
             <p className="skillbar-style">{skill}</p> 
            <div className="skillbar-content">
              
                <LinearProgress 
                    variant="determinate"
                    value={percentage}
                    className="skillbar-linear"
                    sx={barstyles}
                />
                <p className="percentage">{fillWidth}</p>
            </div> 
        </div>
    
    );
};

SkillBar.propTypes = { 
    skill: PropTypes.string.isRequired, 
    percentage: PropTypes.number.isRequired
};

export default SkillBar;
