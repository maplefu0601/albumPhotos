import React, { Component } from 'react';
import './App.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AlbumsComponent from './components/albums.js';

class App extends Component {
    constructor() {
        super();
        this.state = { users: [], selectedUser: -1 };
        this.selectUser = this.selectUser.bind(this);
    }
    render() {
        console.log(this.state);
        const { users } = this.state;
        return (
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        ALBUMS & PHOTOS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            {
                                <NavDropdown
                                    title="Users"
                                    id="basic-nav-dropdown"
                                >
                                    {users.map(user => (
                                        <NavDropdown.Item
                                            key={user.id}
                                            onClick={this.selectUser.bind(
                                                this,
                                                user.id,
                                            )}
                                        >
                                            {user.name}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <AlbumsComponent userId={this.state.selectedUser} />
            </Container>
        );
    }

    componentDidMount() {
        this.getUsers();
    }

    selectUser(index) {
        console.log('selected:', index);
        this.setState({ selectedUser: index });
    }

    getUsers = () => {
        fetch(`${window.configs.apiUrl}users`)
            .then(data => data.json())
            .then(res => this.setState({ users: res }));
    };
}

export default App;
