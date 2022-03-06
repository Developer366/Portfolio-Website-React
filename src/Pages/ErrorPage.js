import React from 'react';

import classes from "./ErrorPage.module.css";

export default function ErrorPage() {
    return (
        <div className={classes.Error}>
            <h1>Error! Page/URL does not exist!</h1>
        </div>
    )
}
