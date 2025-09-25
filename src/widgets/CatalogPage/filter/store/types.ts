export type FilterType = {
    nameCatalog: string,
    content: string[]
    status: boolean
    changed: string
}
export type FilterAreaType = {
    [key:string]: FilterType
}

