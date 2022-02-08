import React, { useRef } from "react";
import { AppProps } from "../../types/types";
import ListItem from "./list-item.component";

const List: React.FunctionComponent<AppProps> = ({ data }) => {
  const ref = useRef<any>(null);
  const focus = () => {
    console.log(ref.current!);
  };
  let list;
  if (data) {
    list = data!.map((item) => (
      React.forwardRef((item,))
    ));
  }
  return <ul>{list}</ul>;
};

export default List;
