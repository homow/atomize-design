import {Component} from 'react';

class FeatureIconTitle extends Component {
    render() {
        const {icon, title, text} = this.props;

        return (
            <div className={"shadow-rounded-box px-4 py-12 space-y-6"}>
                {icon}
                <h4 className={"text-xl md:text-2xl"}>{title}</h4>
                <p className={"text-primary-gray font-light"}>{text}</p>
                <a target={"_blank"} href={"https://youtube.com/@homow_dev"} className={"text-blue-500 font-medium text-sm"}>See How</a>
            </div>
        );
    }
}

export default FeatureIconTitle;