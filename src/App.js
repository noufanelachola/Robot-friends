import React, {Component} from 'react';
import CardList from './CardList';
import { Robots } from './Robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor(){
        super();
        this.state = {
            Robots: Robots,
            searchField: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const filteredRobots = this.state.Robots.filter((Robot)=>{
            return Robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        console.log(filteredRobots);

        return(
            <div className='tc'>
                <h1>ROBOT FRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList Robots={filteredRobots}/>
            </div>
        );
    }
}



export default App;