import React, { Component } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';

class PhotoModal extends Component {
    render() {
        console.log('photo props:', this.props);
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.photo.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.photo.url} rounded fluid />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default PhotoModal;
