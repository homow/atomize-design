import {Component} from 'react';

class OverViewBox extends Component {
    render() {
        const {title, text} = this.props;

        return (
            <div className={"text-center space-y-4 max-w-44"}>
                <p className={"text-3xl font-bold"}>
                    {title}
                </p>
                <p className={"text-primary-gray font-light"}>
                    {text}
                </p>
            </div>
        );
    }
}

export default OverViewBox;