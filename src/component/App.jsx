import { render } from "@testing-library/react";
import React, {Component} from "react";
import DisplayName from "./DisplayName";
import NamesList from "../component/NamesList";
import AlertUser from "./AlertUser";
import SuperheroTable from "./SuperheroTable";

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: 'Reggie',
//             lastName: 'White'
//         }
//     }

//     render(){
//         return(
//            <div className="App">
//                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
//            </div>
//         )
//     }
// }

// class App extends Component {
//     state = {
//         names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
//     };
    
//     render() {
//         return (
//             <div className="App">
//                 <NamesList names={this.state.names} />
//             </div>
//         );
//     }





// }

// class App extends Component {
//     state = {
//         names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
//     };

//     displayAlert(){
//         alert("devCodeCamp")
//     }

//     render() {
//         return (
//             <div className="App">
//                 <AlertUser alertUser={this.displayAlert}/>
//             </div>
//         );
//     }
// }

class App extends Component {
    state = {
        superheroes : [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondaryAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondaryAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondaryAbility: 'Shoots web'
            }
        ]
    }

    render () {
        return( 
            <div className="App">
                <SuperheroTable superheroes={this.state.superheroes}S />
            </div>
        )
    }


}

export default App;