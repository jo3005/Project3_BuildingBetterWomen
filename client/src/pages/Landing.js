import React from "react";
import Loading from "../components/containers/Loading"

export default function Landing (props) {
    return (
        <>
            <Loading {...props} className="landingpage container-fluid"/>
        </>
    )
}