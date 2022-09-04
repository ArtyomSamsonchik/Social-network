import React from 'react';

type DialogProps = {
    userName: string
}

export const Dialog: React.FC<DialogProps> = (props) => {
    return (
        <div>{props.userName}</div>
    );
};