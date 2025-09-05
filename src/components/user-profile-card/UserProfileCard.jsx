import {Component} from "react";
import userGirl from "@/static/girl-user.webp"

class UserProfileCard extends Component {
    render() {
        return (
            <div className={"shadow-rounded-box p-8.5"}>
                {/* <=== picture profile card ===> */}
                <div className={"size-18 mx-auto rounded-full overflow-hidden"}>
                    <img className={"w-full"} src={`${userGirl}`} alt="girl-user"/>
                </div>

                {/* <=== info profile card ===> */}
                <div className={"mt-5 text-center space-y-2"}>
                    <p className={"text-[1.375rem] font-medium"}>
                        Megan Fisher
                    </p>
                    <p className={"text-[13px] font-light text-gray-lt"}>
                        Engineering Manager
                    </p>
                </div>

                {/* <=== buttons profile card ===> */}
                <div className={"mt-12 flex flex-col gap-2 xx:flex-row xx:gap-6 justify-center text-xs  xx:*:text-sm *:font-medium *:flex *:flex-row *:items-center *:justify-between *:w-full *:rounded-full *:cursor-pointer *:px-4 *:py-2 *:gap-2"}>
                    <button type="button" className={"primary-btn"}>
                        Follow
                        <svg className={"size-5 fill-white"}>
                            <use href="#plus-icon"></use>
                        </svg>
                    </button>
                    <button type="button" className={"secondary-btn"}>
                        Message
                        <svg className={"size-5"} fill={"currentColor"}>
                            <use href="#message-icon"></use>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}

export default UserProfileCard;