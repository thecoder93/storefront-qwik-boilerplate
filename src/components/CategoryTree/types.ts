export type CategoryTreeItem = {
	name: string;
	count?: number;
	href: string;
};

export type CategoryTreeProps = {
	parent?: CategoryTreeItem;
	categories: CategoryTreeItem[];
};

export type CategoryTreeItemProps = Omit<CategoryTreeItem, 'name'>;
