import {Component} from 'react';
import userImg from "@/static/girl-user.webp"

class SmallUserBox extends Component {
    render() {
        return (
            <div className={"bg-primary-bg rounded-lg shadow-xs p-4 flex items-center justify-between border border-gray-100 dark:border-gray-900"}>
                <div className={"flex items-center gap-2"}>
                    <span className={"inline-block w-10 rounded-full overflow-hidden"}>
                        <img className={"w-full"} src={`${userImg}`} alt="user image"/>
                    </span>
                    <p className={"text-sm font-medium"}>Big Changiz</p>
                </div>
                <div className={"max-w-max bg-blue-400 rounded-full p-1"}>
                    <svg className={"size-3 stroke-white fill-white"}>
                        <use href="#plus-icon"></use>
                    </svg>
                </div>
            </div>
        );
    }
}

export default SmallUserBox;