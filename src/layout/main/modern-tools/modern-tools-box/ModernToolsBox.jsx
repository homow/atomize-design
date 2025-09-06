import {Component} from 'react';

class ModernToolsBox extends Component {
    render() {
        const {icon, title, text, btnText} = this.props;

        return (
            <div className={"shadow-primary bg-primary-bg rounded-lg space-y-6 p-8 border border-gray-100 dark:border-gray-900"}>
                {icon}

                <h3 className={"text-lg sm:text-2xl font-medium"}>
                    {title}
                </h3>

                <p className={"text-primary-gray"}>
                    {text}
                </p>

                <button className={"text-blue-500 font-medium text-sm flex flex-row gap-2 items-center cursor-pointer hover:opacity-90 transition-all"}>
                    {btnText}
                    <svg className={"stroke-blue-500 size-4"}>
                        <use href="#right-arrow-icon"></use>
                    </svg>
                </button>
            </div>
        );
    }
}

export default ModernToolsBox;