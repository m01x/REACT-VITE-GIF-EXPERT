import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}


/**
 * TODO: Hacer la tarea , añadir PropTypes, (yarn add), title obligatorio, url obligatorioa... evaluar el snapshot.
 */

GifItem.propTypes = {
    title: PropTypes.string.isRequired, // title debe ser una cadena
    url: PropTypes.string.isRequired    // url debe ser una cadena (no existe PropTypes.url)
}