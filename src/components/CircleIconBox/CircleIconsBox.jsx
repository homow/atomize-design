import {Component} from "react";

class CircleIconsBox extends Component {
    render() {
        const {icon, className} = this.props;
        return (
            <button className={`border border-bg-gray-hover-lt shadow-[0_0_1px_0_rgba(8,11,14,0.06),_0_3px_3px_-1px_rgba(8,11,14,0.1)] transition-all duration-300 rounded-full max-w-max bg-white dark:bg-slate-900 p-2.5 cursor-pointer hover:shadow-primary ${className}`}>
                {icon}
            </button>
        )
    }
}
export default CircleIconsBox;