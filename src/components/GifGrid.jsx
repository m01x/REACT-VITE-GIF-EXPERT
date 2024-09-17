
import { GifItem } from "./GifItem";
import { useFetchGrid } from "../hooks/useFetchGrid";
import { ErrorGrid } from "./ErrorGrid";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGrid(category);
    const emptinessFlag = images.length === 0;

    return (
        <div key={category}>
            <h3>{category}</h3>
            {isLoading && (<h2>🔄️ Cargando...</h2>)}
            <div className="card-grid">
                {
                    emptinessFlag ? (
                        <ErrorGrid />
                    ) : (
                        images.map((image) => (
                            <GifItem
                                key={image.id}
                                {...image}
                                emptinessFlag={emptinessFlag}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
};


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}