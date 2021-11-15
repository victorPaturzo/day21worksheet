import React from "react";

// . Create a SuperheroTable component that renders a table of superheroes to the web page.
// a. Insert the Exercise 4 state object from the ComponentExercisesSeedData.txt file into 
// your App.js component.
// b. Pass the array of objects as props to the SuperheroTable component you created to be 
// displayed in a table (use a <table> tag and any other tags that are required to be nested 
// inside a table tag)
// c. HINT: think about what higher-order array method could be useful for this particular 
// problem

const SuperheroTable = (props) => {
    
    let renderedHeroes = props.superheroes.map(hero => {
        return(
            <tr>
            <td>{hero.name}</td>
            <td>{hero.primaryAbility}</td>
            <td>{hero.secondaryAbility}</td>
          </tr> 
        )
    })
    return(
        <table>
             <tr>
                <th>Name</th>
                <th>Primary Ability</th>
                <th>Secondary Ability</th>
            </tr>
            {renderedHeroes}
        </table>
        
        )
}

export default SuperheroTable