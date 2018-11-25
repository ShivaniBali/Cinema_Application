import _ from 'lodash';

export function paginate(itemArray, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(itemArray)
        .slice(startIndex)
        .take(pageSize)
        .value();
}