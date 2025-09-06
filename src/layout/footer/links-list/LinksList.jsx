import {Component} from 'react';

class LinksList extends Component {
    render() {
        const {arrayLinks} = this.props;

        const linksItems = arrayLinks.links.map((link, index) =>
            <li key={index}>
                <a target={"_blank"} className={"hover:text-blue-500 transition-all"} href={link.href}>
                    {link.text}
                </a>
            </li>
        );

        return (
            <div>
                <p className={"font-medium"}>
                    {arrayLinks.title}
                </p>

                <ul className={"text-sm text-gray-600 dark:text-gray-400 space-y-2 mt-4"}>
                    {linksItems}
                </ul>
            </div>
        );
    }
}

export default LinksList;