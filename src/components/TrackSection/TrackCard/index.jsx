import { StyledImage, StyledLi, StyledUl } from "./styles";

export const TrackCard = ({ track }) => {
    // Verifica se a propriedade 'track' é válida
    if (!track) {
        return null; // Retorna null para não renderizar o componente
    }

    const handleImageError = (event) => {
        event.target.style.display = "none"; // Oculta a imagem caso ocorra um erro
    };

    return (
        <StyledUl>
            <StyledLi>
                <StyledImage
                    src={track.cover}
                    alt={`Imagem da capa do album ${track.name}`}
                    onError={handleImageError}
                />
            </StyledLi>
            <StyledLi>
                {track.name}
            </StyledLi>
            <StyledLi>
                <a href={track.music} target="_blank" rel="noopener noreferrer">tocar</a>
            </StyledLi>
        </StyledUl>
    );
};
