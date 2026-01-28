// // Inline css stling
// const header = {color : "blue", fontSize:"140px"}
// export default function InlineComponent(){
//     return(
//         <div>
//             <h1 style = {header}>Inline Component</h1>
//         </div>
//     )
// }

// css module stye
import styles from "./inlinecomponent.module.css";

export default function InlineComponent(){
    return(
        <div>
            <h1 className = {styles.header}>Inline Component</h1>
        </div>
    )
}