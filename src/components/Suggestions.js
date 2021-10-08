import "../style/suggestions.scss"
import Profile from "./Profile"


const Suggestions = () => {
    return (
        <div className="sugguestions">
            <div className="titleContainer">
                <div className="title"> Suggestions For You </div>
                <a href="/">See All</a>
            </div>

            <Profile
                caption="Followed by bataa + 3 more"
                urlText="follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />
            <Profile
                caption="Followed by bataa + 3 more"
                urlText="follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />
            <Profile
                caption="Followed by bataa + 3 more"
                urlText="follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />
        </div>
    )
}

export default Suggestions
