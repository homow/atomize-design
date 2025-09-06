import {Component} from 'react';

class FooterSocial extends Component {
    render() {
        const {link, icon} = this.props;

        return (
            <a href={link} target={"_blank"} className={"hover:text-blue-500 transition-all"}>
                {icon}
            </a>
        );
    }
}

export default FooterSocial;