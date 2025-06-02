import GridGlow from '../../assets/Rough Grid3.png';
import '../styles/Visuals.css';

function Visuals({ position, style }) {
    const positionClass = position === 'top' ? 'visuals-top' :
                            position === 'bottom' ? 'visuals-bottom' : '';
    return (
        <div className={`visuals-container ${positionClass}`} style={style}>
            <img src={GridGlow} className="GridGlow" alt="GridGlow.png" />
        </div>
    );
}

export default Visuals