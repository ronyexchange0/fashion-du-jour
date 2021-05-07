export const shrinkifySizes = (size) => {
    if (size === "small") {
        size = "S"
    } else if (size === "medium") {
        size = "M"
    } else if (size === "large") {
        size = "L"
    } else if (size === "x large") {
        size = "XL"
    }
    return size
}