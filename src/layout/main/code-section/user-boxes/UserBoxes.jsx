import {Component} from 'react';
import UserProfileCard from "@/components/user-profile-card/UserProfileCard.jsx";
import SmallUserBox from "@/layout/main/code-section/user-boxes/small-user-box/SmallUserBox.jsx";
import PaymentBox from "@/layout/main/code-section/user-boxes/payment-box/PaymentBox.jsx";

class UserBoxes extends Component {
    render() {
        return (
            <div className={"space-y-4 overflow-hidden"}>

                {/* <=== user profile card ===> */}
                <div className={"bg-primary-bg rounded-lg"}>
                    <UserProfileCard/>
                </div>

                {/* <=== small user profile card ===> */}
                <div>
                    <SmallUserBox/>
                </div>

                {/* <=== payment box ===> */}
                <div>
                    <PaymentBox/>
                </div>
            </div>
        );
    }
}

export default UserBoxes;