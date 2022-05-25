export const createComunications = (personaje) => {
    return `
<p class="comunications__text display-1">${personaje.comunicar()}</p>
    <img
        class="comunications__picture"
        src="img/${personaje.nombre.toLowerCase()}.jpg"
        alt="${personaje.nombre} ${personaje.familia}"
    />`;
};
