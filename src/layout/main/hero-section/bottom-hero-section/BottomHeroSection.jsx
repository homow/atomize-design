import {Component} from 'react';
import UserProfileCard from "@/components/user-profile-card/UserProfileCard.jsx";
import CircleIconsBox from "@/components/CircleIconBox/CircleIconsBox.jsx";
import PostAndLabelUser from "@/layout/main/hero-section/bottom-hero-section/post-and-label-user/PostAndLabelUser.jsx";
import SmallLoginUser from "@/layout/main/hero-section/bottom-hero-section/small-login-user/SmallLoginUser.jsx";

class BottomHeroSection extends Component {
    render() {
        return (
            <div className={"container mt-20 space-y-20 md:space-y-0 md:flex md:items-center md:justify-center md:gap-12 lg:gap-6"}>
                {/* <=== user profile card and circle icon ===> */}
                <div>
                    {/* <=== circle icon ===> */}
                    <div className={"mb-8 space-x-2 text-center"}>
                        <CircleIconsBox icon={<svg className={"fill-red-500 size-4.5"}>
                            <use href="#heart-icon"></use>
                        </svg>}/>
                        <CircleIconsBox icon={<svg className={"fill-blue-500 size-4.5"}>
                            <use href="#Eye-icon"></use>
                        </svg>}/>
                        <CircleIconsBox icon={<svg className={"fill-amber-400 size-4.5"}>
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

                    {/* <=== user profile card ===> */}
                    <UserProfileCard/>
                </div>

                {/* <=== post user and user label info ===> */}
                <PostAndLabelUser/>

                {/* <=== small login user ===> */}
                <SmallLoginUser/>
            </div>
        )
    }
}

export default BottomHeroSection;