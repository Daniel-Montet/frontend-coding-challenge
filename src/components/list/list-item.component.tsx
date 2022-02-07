import { AppProps } from "../../types/types";

const ListItem: React.FunctionComponent<AppProps> = ({ dataItem }) => {
  return <li>{dataItem?.title}</li>;
};

export default ListItem;
