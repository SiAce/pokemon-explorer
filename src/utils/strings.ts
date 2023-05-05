export function capitalize(s: string) {
    if (s.length < 1) {
        return s;
    }

    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}