import isUndefined from "lodash.isundefined";
import find from "lodash.find";

export const TABLE_LOAD = {
    INITIAL: 1,
    UPDATE: 2,
};

// Populate this list with anything that might render in the toolbar to determine if we hide the toolbar
export const TOOLBAR_ITEMS = ['title', 'filter', 'search', 'print', 'download', 'viewColumns', 'customToolbar'];

export const hasToolbarItem = (options, title) => {
    options.title = title;

    return !isUndefined(find(TOOLBAR_ITEMS, i => options[i]));
};

// Select Toolbar Placement options
export const STP = {
    REPLACE: 'replace',
    ABOVE: 'above',
    NONE: 'none',
};
