import React from 'react'

const Contacts = () => {
    return (
        <div style={{ backgroundColor: '#172941' }}>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-4 col-sm-12 pt-3">
                        <div className="contact" style={{ marginLeft: '50px' }}>

                            <h5 style={{ color: '#787874' }}>Get Social</h5>
                            <div className="socialStyle">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 pt-3">
                        <div className="contact" style={{ marginLeft: '50px' }}>
                            <h5 className="contactHeader">Contacts</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="fas fa-envelope-square mr-2"></i><span className="social">info@bu.edu.eg</span></li>
                                <li>
                                    <i className="fas fa-phone mr-2"></i><span className="social">+20 1928</span></li>
                                <li>
                                    <i className="fas fa-map-marker mr-2"></i><span className="social">El She0rouk City , Suez Desert Road, Cairo 11837 . P.O. Box 43</span></li>
                            </ul>
                        </div>

                    </div>






                    <div className="col-md-4 col-sm-12 pt-3 pb-5">
                        <div className="contact" style={{ marginLeft: '50px' }}>
                            <h5 className="contactHeader">Useful Links</h5>
                            <div className="links">
                                <span className="social">Job Vacancies</span>
                            </div>
                            <div className="links">
                                <span className="social">Students Union</span>
                            </div>
                            <div className="links">
                                <i className="fas fa-share mr-2"></i>
                                <span className="social">HRM</span>
                            </div>
                            <div className="links">
                                <i className="fas fa-share mr-2"></i>
                                <span className="social"> Bue Mail</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contacts
