import React from 'react'
import FeaturesCard from './Cards/features_cards'
const Elearning = 'https://www.bue.edu.eg/wp-content/uploads/2018/07/E-Learning.png'
const quality = 'https://www.bue.edu.eg/wp-content/uploads/2018/07/QV.png'
const SRS = 'https://www.bue.edu.eg/wp-content/uploads/2018/07/srs.png'
const Library = 'https://www.bue.edu.eg/wp-content/uploads/2018/07/Library.png'
const width = '60px'
const height = '60px'
const Features = () => {

    const features = [
        {
            header: 'Q & V',
            icon: <img src={quality} style={{ width: width, height: height }} />,
            paragraph: 'Quality & Validation'
        },
        {
            header: 'Elearning',
            icon: <img src={Elearning} style={{ width: width, height: height }} />,
            paragraph: 'Electronic Learning'
        }, {
            header: 'SRS',
            icon: <img src={SRS} style={{ width: width, height: height }} />,
            paragraph: 'Student Record System'
        }, {
            header: 'Library',
            icon: <img src={Library} style={{ width: width, height: height }} />,
            paragraph: 'Bue Scientific Library'
        }
    ]

    const allFeatures = features.map(feature => {
        return (
            <FeaturesCard features={feature} />
        )
    })
    return (
        <div className="container">
            <div className="row">
                {allFeatures}
            </div>
        </div>
    )
}



export default Features