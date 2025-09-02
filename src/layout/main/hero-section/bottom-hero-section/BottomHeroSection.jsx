import { Component } from 'react';
import UserProfileCard from "@/components/user-profile-card/UserProfileCard.jsx";

class BottomHeroSection extends Component {
    render() {
        return (
            <div className={"container mt-20"}>
                {/* <=== user profile card ===> */}
                <UserProfileCard/>

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