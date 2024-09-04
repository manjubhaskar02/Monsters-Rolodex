


import './card-list.styles.css';
import Card from "../card/card.component";
const CardList = ({ monsters }) =>
(
    <div className="card-list"  >
        {monsters.map((monster) => {
            return (
                <Card monster={monster} key={monster.id} />
            )
        })}
    </div>
)

export default CardList;


// import { Component } from "react";
// import './card-list.styles.css';
// import Card from "../card/card.component";
// class CardList extends Component {
//     render() {
//         console.log(this.props.monsters)
//         console.log('render from cardlist')
//         const { monsters } = this.props;

//         return (
//             <div className="card-list" >
//                 {monsters.map((monster) => {

//                     return (

//                         <Card monster={monster}  />
//                     )
//                 })}
//             </div>
//         )
//     }
// }
// export default CardList;