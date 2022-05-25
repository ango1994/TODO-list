import { Asesor } from '../Asesor.js';
import { Escudero } from '../Escudero.js';
import { Luchador } from '../Luchador.js';
import { Rey } from '../Rey.js';
export const createCard = (personaje) => {
    let template = `
        <li class="character col">
            <div class="card character__card">
                <img
                    src="img/${personaje.nombre.toLowerCase()}.jpg"
                    alt="${personaje.nombre}y ${personaje.familia}"
                    class="character__picture card-img-top"
                />
                <div class="card-body">
                    <h2 class="character__name card-title h4">
                        ${personaje.nombre} - ${personaje.familia}
                    </h2>
                    <div class="character__info">
                        <ul class="list-unstyled">
                            <li>${personaje.edad}</li>`;
    if (personaje.estadoVivo) {
        template += `
                            <li>
                                Estado:
                                <i class="fas fa-thumbs-up"></i>
                            </li>`;
    }
    else {
        template += `
                            <li>
                                Estado:
                                <i class="fas fa-thumbs-down"></i>
                            </li>`;
    }
    template += `
                        </ul>
                    </div>
                    <div class="character__overlay">
                        <ul class="list-unstyled">`;
    if (personaje instanceof Rey) {
        template += `<li>Años de reinado: ${personaje.reinado}</li>`;
    }
    else if (personaje instanceof Asesor) {
        template += `<li>Asesora a: ${personaje.jefe.nombre}</li>`;
    }
    else if (personaje instanceof Escudero) {
        template += `<li>Peloteo: ${personaje.pelotismo} </li><li>Sirve a: ${personaje.amo.nombre}</li>`;
    }
    else if (personaje instanceof Luchador) {
        template += `<li>Arma: ${personaje.arma}</li><li>Destreza: ${personaje.destreza}</li>`;
    }
    template += `
                        </ul>
                        <div class="character__actions">
                            <button class="character__action btn">habla</button>
                            <button class="character__action btn">muere</button>
                        </div>
                    </div>
                </div>
                <i class="emoji"></i>
            </div>
        </li>
    </ul>
</div>
`;
    return template;
};
