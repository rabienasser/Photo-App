import React from 'react'
import axios from 'axios'

import Photo from '../../components/Photo/Photo'

class Home extends React.Component {
    state = {
        photoData: null,
    }

    loadRandomPhotos = async () => {
        try {
            const res = await axios(`https://api.unsplash.com/photos?order_by=latest&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
            const { data } = res
            this.setState({ photoData: data })
        } catch (err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.loadRandomPhotos()
    }

    render() {
        const { photoData } = this.state
        return (
            <div>
                {photoData && photoData.map(photo => <Photo photo={photo} key={photo.id} />)}
            </div>
        )
    }
}

export default Home