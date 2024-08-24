import { Icons } from "../../icons/icons";
export const YourCard =() =>{
    return (
        <div>
            <div className="font-semibold flex">
                    Your
                    <Icons input ={'Right'} />
                </div>
                <Icons input = {'Your channel'} />
                <Icons input = {'History'} />
                <Icons input = {'Playlists'} />
                <Icons input = {'Your videos'} />
                <Icons input = {'Watch later'} />
                <Icons input = {'Liked videos'} />
                <hr className="py-2"/>
        </div>
    )
}
