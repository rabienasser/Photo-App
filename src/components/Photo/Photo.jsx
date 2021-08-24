import React from 'react'
import FocusedPhoto from '../FocusedPhoto/FocusedPhoto'

class Photo extends React.Component {
    state = {
        active: false,
    }

    handleClick = () => {
        this.setState({ active: true })
    }

    closePhoto = () => {
        this.setState({ active: false })
    }

    render() {
        const { photo, photo: { urls, description } } = this.props
        const { active } = this.state
        return (
            <>
                <img onClick={this.handleClick} src={urls.small}  alt={description} />

                {active && <FocusedPhoto photo={photo} closePhoto={this.closePhoto} />}
            </>
        )
    }
}

export default Photo