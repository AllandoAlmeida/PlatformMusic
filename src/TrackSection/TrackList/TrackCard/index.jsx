import { StyledImage, StyledLi, StyledUl } from "./styles";


export const TrackCard = ({ track }) => {
    return (
        <StyledUl>
            <StyledLi>
                <StyledImage src={track.cover} alt={`Imagem da capa do album ${track.name}`} />
            </StyledLi>
            <StyledLi>
                {track.name}
            </StyledLi>
            <StyledLi>
                <a href={track.music} target="_blank">tocar</a>
            </StyledLi>
        </StyledUl>
    );
};
