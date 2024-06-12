const isDuplicatedItem = (item: String, dataCol: String[]) => {
    const setValue = new Set(dataCol);
    const isItemExisit = setValue.has(item);
    return isItemExisit;
};
export default isDuplicatedItem;
