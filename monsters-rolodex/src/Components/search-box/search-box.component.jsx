
import './search-box.styles.css';
const SearchBox = ({ className, placeholder, onChangeHandler }) =>

(
    <div>
        <input
            className={className}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler} />

    </div>
)


export default SearchBox;
// import { Component } from "react";
// import './search-box.styles.css'
// class SearchBox extends Component {
//     render() {
//         return (
//             <div>
//                 <input
//                     className={this.props.className}
//                     type='search'
//                     placeholder={this.props.placeholder}
//                     onChange={this.props.onChangeHandler} />

//             </div>
//         )
//     }
// }
// export default SearchBox;