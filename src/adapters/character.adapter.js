export const characterAdapter = (character) => {
    return {
        id: character.id,
        image: character.image,
        created: character.created,
        name: character.name,
        status: character.status,
        gender: character.gender,
        origin: character.origin.name,
        species: character.species
    }
}

export const characterPreviewAdapter = (character) => {
    return {
        image: character.image,
        name: character.name
    }
}