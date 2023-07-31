export const useTranslation = (fileName: string) => {
	console.log(fileName);
	return { t: (label: string, ...args) => label };
};

export const sleep = (timeout: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
};
