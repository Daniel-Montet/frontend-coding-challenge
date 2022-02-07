import { AppProps } from "../../types/types";
import ListItem from "./list-item.component";

const List: React.FunctionComponent<AppProps> = ({ data }) => {
  return (
    <ul>
      {data!.map((item) => (
        <ListItem key={item.id}> {item.title} </ListItem>
      ))}
    </ul>
  );
};

export default List;
