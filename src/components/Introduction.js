import React from 'react'

const Introduction = () => {
    return (
        <div>
            <section className="text-center mt-5 mb-5 intro">
                <div className="container">
                    <h5 style={{ color: '#9D9C9C' }}
                    >Welcome To The British University in Egypt</h5>
                    <p className="mt-3" style={{ color: '#9D9C9C', fontSize: 18 }}
                    >The miracles of the Egyptian Scientists from seven thousand years ago are still surprising all researchers over the world. The genes of glory-making inherited from the ancestors are reshaping the
                 future and the status that Egypt deserves among nations</p>
                </div>
            </section>
            <section className="guideance text-center">
                <h2 className="guidanceHeader">bue covid-19 corona viruise guideance</h2>
                <button className="btnGuide btn btn-danger d-block m-auto"
                >More Information</button>
                <button className="btnGuide btn btn-danger"
                >News</button>
            </section>
        </div>

    )
}

export default Introduction
