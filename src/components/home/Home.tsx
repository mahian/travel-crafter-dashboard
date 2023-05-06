import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-xl-7 mb-lg-0 py-5 py-md-6">
                        <div className="lc-block mb-3 mb-md-5 lh-1">
                            <div >
                                <h1 className="rfs-30 text-primary">The quick brown fox jumps.</h1>
                            </div>
                        </div>
                        <div className="lc-block">
                            <a className="btn btn-lg btn-dark" href="#" role="button">More Info</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-5">
                        <div className="lc-block px-md-4 px-lg-5 lh-lg">
                            <div>
                                <p className="rfs-7"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 g-0">
                        <div className="lc-block">
                            <a href="https://images.unsplash.com/photo-1489058535093-8f530d789c3b?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mzl8fGFyY2hpdGVjdHVyZXxlbnwwfDB8fHwxNjM0MzgwMDgz&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1620&amp;h=1152">
                                <img className="img-fluid w-100" src="https://images.unsplash.com/photo-1489058535093-8f530d789c3b?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mzl8fGFyY2hpdGVjdHVyZXxlbnwwfDB8fHwxNjM0MzgwMDgz&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1620&amp;h=1152" alt="Photo by Sandro Katalina" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 d-flex justify-content-center align-items-baseline">
                        <div className="lc-block py-4 me-3">
                            <div >
                                <h4 className="fw-bolder">2016</h4>
                            </div>
                        </div>
                        <div className="lc-block py-4">

                        </div>
                        <div className="lc-block py-4 ms-3">
                            <div >
                                <h4 className="fw-bolder"> 2021</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;