export type CategoryFiltersProps = {
	facets: SfFacet[];
};

export type FilterProps = {
	facet: SfFacet;
	selected: string[];
	onChange: (parameter: string) => void;
	type: 'size' | 'color';
};

type SfFacetItem = {
	label: string;
	value: string;
	productCount: number;
};

type SfFacet = {
	label: string;
	name: string;
	values: SfFacetItem[];
};
