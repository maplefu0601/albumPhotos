import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class AlbumsComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.userId = props.userId;
        this.state = {
            albums: [],
            albumId: -1,
            navigateToPhoto: false,
        };
    }

    navigateToPage = index => {
        console.log('selected album id:', index, this.context.router);
        this.setState({ navigateToPhoto: true, albumId: index });
        // this.context.router.push(`/photos/${index}`);
    };

    render() {
        const { albums, navigateToPhoto, albumId } = this.state;
        this.userId = this.props.userId;
        console.log('selected userId---:', this.userId);
        if (navigateToPhoto) {
            return <Redirect to={`/photos/${albumId}`} />;
        }

        return (
            <Container>
                {
                    <Row>
                        {albums.map(album => (
                            <Col xs={6} md={4} key={album.id}>
                                <Card
                                    bg="secondary"
                                    text="white"
                                    style={{
                                        width: '18rem',
                                        height: '8rem',
                                        textAlign: 'center',
                                        marginBottom: '10px',
                                    }}
                                    key={album.id}
                                >
                                    <Card.Body
                                        key={album.id}
                                        onClick={this.navigateToPage.bind(
                                            this,
                                            album.id,
                                        )}
                                    >
                                        <Card.Title>
                                            {album.title}
                                        </Card.Title>
                                        <Card.Text />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                }
            </Container>
        );
    }

    componentDidMount() {
        this.getAlbums();
    }

    componentWillReceiveProps(props) {
        const { userId } = this.props;
        console.log('coming userId:', userId, props);
        if (userId !== props.userId) {
            this.userId = props.userId;
            this.getAlbums();
        }
    }

    getAlbums() {
        console.log('current userId:', this.userId);
        fetch(`${window.configs.apiUrl}albums/${this.userId}`)
            .then(data => data.json())
            .then(res => this.setState({ albums: res }));
    }
}

export default AlbumsComponent;
