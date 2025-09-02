import {Component} from 'react';
import UserProfileCard from "@/components/user-profile-card/UserProfileCard.jsx";
import CircleIconsBox from "@/components/CircleIconBox/CircleIconsBox.jsx";

class BottomHeroSection extends Component {
    render() {
        return (
            <div className={"container mt-20"}>
                {/* <=== user profile card ===> */}
                <div className={""}>
                    <div className={"mb-8 space-x-2 text-center"}>
                        <CircleIconsBox icon={<svg className={"size-4.5"}>
                            <use href="#heart-icon"></use>
                        </svg>}/>
                        <CircleIconsBox icon={<svg className={"size-4.5"}>
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

                {/* <=== hero section ===> */}
                <div>

                </div>

                {/* <=== hero section ===> */}
                <div>

                </div>
            </div>
        )
    }
}

export default BottomHeroSection;