type DataItem = {
	albumId: string;
	id: string;
	title: string;
	url: string;
	thumbnailUrl: string;
}

export type AppProps = {
	data?: DataItem[],
	dataItem?: DataItem
};