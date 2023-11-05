import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewAssignment = () => {
    const assignment = useLoaderData()
    const {_id,title, level, marks, date, details, photo, displayName, email, status} = assignment
    return (
        <div>
            {title}
        </div>
    );
};

export default ViewAssignment;