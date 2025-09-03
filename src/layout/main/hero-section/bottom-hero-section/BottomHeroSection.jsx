import {Component} from 'react';
import UserProfileCard from "@/components/user-profile-card/UserProfileCard.jsx";
import CircleIconsBox from "@/components/CircleIconBox/CircleIconsBox.jsx";

class BottomHeroSection extends Component {
    render() {
        return (
            <div className={"container mt-20"}>
                {/* <=== user profile card ===> */}
                <div>
                    <div className={"mb-8 space-x-2 text-center"}>
                        <CircleIconsBox icon={<svg className={"size-4.5"}>
                            <use href="#heart-icon"></use>
                        </svg>}/>
                        <CircleIconsBox icon={<svg className={"fill-blue-500 size-4.5"}>
                            <use href="#Eye-icon"></use>
                        </svg>}/>
                        <CircleIconsBox icon={<svg className={"size-4.5"}>
                            <use href="#pencil-icon"></use>
                        </svg>}/>
                        <CircleIconsBox icon={<svg className={"size-4.5"}>
                            <use href="#chain-icon"></use>
                        </svg>}/>
                        <CircleIconsBox icon={<svg className={"size-4.5"}>
                            <use href="#download-icon"></use>
                        </svg>}/>
                        <CircleIconsBox className={"hidden xx:inline-block"} icon={<svg className={"text-red-600 size-4.5"}>
                            <use href="#play-icon"></use>
                        </svg>}/>
                    </div>
                    <UserProfileCard/>
                </div>

                {/* <=== small login card ===> */}
                <div className={"mt-10 shadow-rounded-box text-center p-8 space-y-14"}>
                    <div className={"space-y-2"}>
                        <p className={"text-xl font-medium tracking-wider"}>Login into your account</p>
                        <p className={"text-gray-lt text-xs"}>Don`t have an account yet? <span className={"text-blue-500 font-medium cursor-pointer"}>Create New</span></p>
                    </div>

                    <div className={"flex flex-col gap-4"}>
                        <label htmlFor={"mail-input"} className={"relative rounded-full pl-2 pr-8 py-2 border border-border-gray focus-within:border-blue-500 transition-all"}>
                            <input placeholder={"mail@example.co"} id={"mail-input"} className={"w-full block peer outline-none grow text-sm xs:text-base placeholder:text-sm"} type="text"/>
                            <svg className={"absolute top-1/2 -translate-1/2 right-0 size-5 fill-gray-lt"}>
                                <use href="#mail-icon"></use>
                            </svg>
                        </label>
                        <label htmlFor={"password-input"} className={"relative rounded-full pl-2 pr-8 py-2 border border-border-gray focus-within:border-blue-500 transition-all"}>
                            <input placeholder={"Password"} id={"password-input"} className={"w-full block peer outline-none grow text-sm xs:text-base placeholder:text-sm"} type="text"/>
                            <svg className={"absolute top-1/2 -translate-1/2 right-0 size-5 fill-gray-lt"}>
                                <use href="#Eye-icon"></use>
                            </svg>
                        </label>
                    </div>

                    <button type={"button"} className={"btn-bg-blue block w-full"}>Login</button>
                </div>

                {/* <=== hero section ===> */}
                <div>

                </div>
            </div>
        )
    }
}

export default BottomHeroSection;