import React, { useState } from "react";
import { AppProps } from "../../types/types";

const ListItem: React.FunctionComponent<AppProps> = React.forwardRef(
  ({ dataItem, focus }, ref) => {
    const [title, editTitle] = useState(dataItem!.title);
    const [isFocused, setFocus] = useState(false);

    return (
      <div>
        <div>{Date.now().toString()}</div>
        <input
          type="text"
          value={title}
          ref={ref}
          onMouseEnter={() => focus!()}
        />
        {/* <Node
        handleFocus={setFocus}
        title={title}
        handleEditTitle={editTitle}
        isFocused={isFocused}
      /> */}
      </div>
    );
  }
);

// const Node: React.FunctionComponent<AppProps> = ({
//   isFocused,
//   title,
//   handleEditTitle,
//   handleFocus,
// }) => {
//   const [count, setCount] = useState(0);
//   if (isFocused) {
//     return (
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => handleEditTitle!(e.target.value)}
//         onMouseOut={() => handleFocus!(false)}
//         onMouseEnter={() => handleFocus!(true)}
//       />
//     );
//   } else {
//     return <label onMouseEnter={() => handleFocus!(true)}>{title}</label>;
//   }
// };

export default ListItem;
