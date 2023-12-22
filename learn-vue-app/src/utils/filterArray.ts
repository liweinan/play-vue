type ArrayObject = { [key: string]: string };

export function filterArray(
    array: ArrayObject[],
    key: string,
    term: string
): ArrayObject[] {
    const filterTerm = term.toLowerCase();

    return array.filter(
        (item) => item[key].toLowerCase().includes(filterTerm)
    );
}