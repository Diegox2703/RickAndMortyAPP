export const locationAdapter = (location) => {
    return {
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
        residents: location.residents,
        created: location.created
    }
}