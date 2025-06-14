export const episodeAdapter = (episode) => {
    return {
        id: episode.id,
        name: episode.name,
        air_date: episode.air_date,
        episode: episode.episode,
        characters: episode.characters,
        created: episode.created
    }
}