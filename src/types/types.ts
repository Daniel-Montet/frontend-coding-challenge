type DataItem = {
	albumId: string;
	id: string;
	title: string;
	url: string;
	thumbnailUrl: string;
}

export type AppProps = {
	data?: DataItem[],
	dataItem?: DataItem,
	isFocused?: boolean,
	handleFocus?: Function,
	title?: string,
	handleEditTitle?: Function,
	ref?: any,
	focus?: Function
};