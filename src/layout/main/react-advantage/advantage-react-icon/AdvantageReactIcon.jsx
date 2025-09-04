import {Component} from 'react';

class AdvantageReactIcon extends Component {
    render() {
        const {icon, title, text} = this.props;

        return (
            <div className={"space-y-2"}>
                {icon}
                <h3 className={"font-medium text-lg"}>
                    {title}
                </h3>
                <p className={"text-sm text-primary-gray font-light"}>
                    {text}
                </p>
            </div>
        );
    }
}

export default AdvantageReactIcon;