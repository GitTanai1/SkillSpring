import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohortName, startDate, endDate, status }) {
    // Green text if status is ongoing, blue otherwise
    const titleStyle = {
        color: status === 'ongoing' ? 'green' : 'blue',
        marginTop: '0',
        marginBottom: '15px',
        borderBottom: '1px solid #444',
        paddingBottom: '8px'
    };

    return (
        <div className={styles.box}>
            <h3 style={titleStyle}>{cohortName}</h3>
            <dl style={{ margin: '0' }}>
                <dt>Start Date</dt>
                <dd>{startDate}</dd>
                <dt>End Date</dt>
                <dd>{endDate}</dd>
                <dt>Status</dt>
                <dd>{status}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;
