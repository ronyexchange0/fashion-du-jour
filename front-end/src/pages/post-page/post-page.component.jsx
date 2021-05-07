import React from 'react';

import "./post-page.style.scss";

const PostPage = () => {
    return (
        <main className="post-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1>title</h1>
                        <div className="image" style={{backgroundImage: "url(https://www.suitsmen.co.uk/suit-images/info-main/darwin-classic-fit-suit-jacket-1.jpg)"}}></div>
                        <div className="full-text">test</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PostPage
