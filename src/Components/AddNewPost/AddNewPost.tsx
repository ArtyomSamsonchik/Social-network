import React from 'react';

export const AddNewPost = () => {
    return (
        <div>
            <div>Add new post:</div>
            <textarea id={"input-post"} cols={50} rows={5}></textarea>
            <button>Add</button>
        </div>
    );
};