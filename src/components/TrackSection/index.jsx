import { TrackList } from "./TrackList"

export const TrackSection = ({ tracks }) => {
    return (
        <section>
            <TrackList tracks={tracks}/>
        </section>
    )
}
