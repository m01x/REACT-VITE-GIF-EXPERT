export const getGifs = async (category) => {
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;
    const res = await fetch(url);

    //Nos interesa solo la data, por lo que vamos a extraer solo eso, de todo el JSON de response
    //Osea , solo vamos a desestructurar.
    const { data } = await res.json()
    console.log(data)

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height_small.url
    }));

    return gifs

}