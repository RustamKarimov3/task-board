export function formatDate(date: Date) {
    const dd = date.getDay();
    const formattedDD: string = `${(dd < 10) && 0}${dd}`;

    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    return `${formattedDD}.${mm}.${yyyy}`;
}