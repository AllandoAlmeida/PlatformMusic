import { TrackCard } from "../TrackCard"
import { StyledDiv } from "./styles"

export const TrackList = ({ tracks }) => {
    return (
        <StyledDiv>
            {tracks.map((track) => (
                <TrackCard key={track.id} track={track} />
            ))}

        </StyledDiv>
    )
}