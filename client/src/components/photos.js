import React, { Component } from 'react';
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import PhotoModel from './photo';

class PhotosComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.albumId = props.albumId;
        this.state = { photos: [], photoShow: false };
        this.getPhotos = this.getPhotos.bind(this);
    }

    render() {
        const { photos } = this.state;
        const { params } = this.props.match;
        this.albumId = params.albumId;
        console.log('selected albumId---:', this.albumId, this.props);
        let modalClose = () => this.setState({ photoShow: false });

        return (
            <Container>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                {
                    <Row>
                        {photos.map(photo => (
                            <Col xs={6} md={6} key={photo.id}>
                                <Card
                                    onClick={this.showPhoto.bind(
                                        this,
                                        photo.id,
                                    )}
                                    bg="secondary"
                                    text="white"
                                    style={{
                                        width: '25rem',
                                        height: '15rem',
                                        textAlign: 'center',
                                        marginBottom: '10px',
                                    }}
                                    key={photo.id}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={photo.thumbnailUrl}
                                    />
                                    <Card.Body key={photo.id}>
                                        <Card.Title>
                                            {photo.title}
                                        </Card.Title>
                                        <Card.Text />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                }
                {this.state.photoShow ? (
                    <PhotoModel
                        photo={this.state.photo}
                        show={this.state.photoShow}
                        onHide={modalClose}
                    />
                ) : null}
            </Container>
        );
    }

    componentDidMount() {
        this.getPhotos();
    }

    componentWillReceiveProps(props) {
        const { albumId } = this.props;
        console.log('coming albumId:', albumId, props);
        if (albumId !== props.albumId) {
            this.albumId = props.albumId;
            this.getPhotos();
        }
    }

    showPhoto(index) {
        console.log('showing photo:', index);
        const { photos } = this.state;
        const photo = photos.find(p => {
            return p.id === index;
        });
        this.setState({ photoShow: true, photo: photo });
    }

    getPhotos() {
        console.log('current albumId:', this.albumId);
        fetch(`${window.configs.apiUrl}photos/${this.albumId}`)
            .then(data => data.json())
            .then(res => this.setState({ photos: res }));
    }
}

export default PhotosComponent;
