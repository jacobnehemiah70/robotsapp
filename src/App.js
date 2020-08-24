import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import scroll from './scroll';
import './App.css'
import { robots } from './robots'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('http://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({ robots: users }));
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    render() {
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 class='f1  bg-light-green'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <scroll>
                    <CardList robots={filteredrobots} />
                </scroll>


            </div>
        );

    }
}

export default App; 