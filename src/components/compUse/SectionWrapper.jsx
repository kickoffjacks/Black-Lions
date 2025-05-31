import React from 'react';

function SectionWrapper({ children }) {
    return (
        <div style={{
            width: '85%',
            justifySelf: 'center',
            margin: '0 auto',
            marginBottom: '10px',

        }}>
            {children}
        </div>
    );
};

export default SectionWrapper;