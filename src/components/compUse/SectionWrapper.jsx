import React from 'react';

function SectionWrapper({ children }) {
    return (
        <div style={{
            width: '65%',
            justifySelf: 'center',

        }}>
            {children}
        </div>
    );
};

export default SectionWrapper;