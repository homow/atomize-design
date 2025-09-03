import {Component} from 'react';
import bridgePicture from "@/static/bridge.webp";
import girlPicture from "@/static/girl-user2.webp";
import boyPicture from "@/static/man-user.webp";

class PostAndLabelUser extends Component {
    render() {
        return (
            <div className={"hidden lg:block max-w-74"}>
                {/* <=== post user ===> */}
                <div className={"shadow-rounded-box overflow-hidden"}>
                    <div>
                        <img className={"w-full"} src={`${bridgePicture}`} alt="bridge image"/>
                    </div>

                    <div className={"mt-2 p-4 flex flex-row items-center justify-between"}>
                        <div className={"flex flex-row items-center gap-4"}>
                            <div className={"size-8 rounded-full overflow-hidden"}>
                                <img className={"w-full"} src={`${girlPicture}`} alt="user girl picture"/>
                            </div>
                            <span className={"text-sm font-medium"}>
                                    Megan Fisher
                                </span>
                        </div>

                        <label className={"cursor-pointer inline-block max-w-max"}>
                            <input className={"peer hidden"} type="checkbox"/>
                            <svg className={"size-6 stroke-primary-base fill-transparent peer-checked:fill-red-500 peer-checked:stroke-red-500"}>
                                <use href="#heart-icon"></use>
                            </svg>
                        </label>
                    </div>
                </div>

                {/* <=== user info label ===> */}
                <div className={"mt-8 shadow-rounded-box flex flex-row items-center justify-between px-4 py-2"}>
                    <div className={"flex flex-row items-center gap-4"}>
                        <div className={"rounded-full overflow-hidden size-10"}>
                            <img src={`${boyPicture}`} alt="boyPicture"/>
                        </div>

                        <div>
                            <p className={"-mb-1 text-sm font-medium"}>Changiz Doe</p>
                            <p className={"text-gray-lt text-[13px] font-light"}>Front-End Developer</p>
                        </div>
                    </div>
                    <div>
                        <svg className={"size-6 stroke-primary-base fill-transparent hover:stroke-blue-500 hover:fill-blue-500 transition-all cursor-pointer"}>
                            <use href="#pencil-icon"></use>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostAndLabelUser;