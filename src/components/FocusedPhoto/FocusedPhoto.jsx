import React from 'react'
import {Overlay, Container} from './FocusedPhoto.styles'

class FocusedPhoto extends React.Component {
    render() {
        const { photo: { user: { profile_image, name, } }, closePhoto } = this.props
        return (
            <Overlay>
                <Container>
                    <img src={profile_image.small} alt={name} />
                    <h3>{name}</h3>
                    <button onClick={() => closePhoto()}>X</button>
                </Container>
            </Overlay>
        )
    }
}


export default FocusedPhoto