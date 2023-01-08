import React from "react";

const Loading = () => {
    return (
        <div className="container-fluid py-5 mt-5 pt-5">
            <div className="row">
                <div className="col-md-12 text-center mt-5 pt-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;