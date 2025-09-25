import {Component} from 'react';

class MoreTemplate extends Component {
    render() {
        return (
            <section id={"more-template"} className={"border-none py-10 bg-bg-gray-hover-lt md:container md:rounded-[3.5rem]"}>
                <div className={"container tracking-wide md:flex items-center justify-between"}>

                    <div>
                        <p className={"text-2xl font-bold"}>
                            UI Templates are on their way 🚀
                        </p>

                        <p className={"mt-4 mb-12 md:mb-0 text-primary-gray font-light"}>
                            Official UI templates build on Atomize React will be released very soon.
                        </p>
                    </div>

                    <a target={"_blank"} href={"https://youtube.com/@homow_dev"} type="button" className="max-w-max bg-primary-base text-primary-bg flex flex-row gap-4 rounded-full p-3 text-sm font-medium items-center hover:shadow-primary hover:opacity-80 transition-all cursor-pointer duration-300">
                        Get notified
                        <svg className={"size-4 stroke-primary-bg"}>
                            <use href="#right-arrow-icon"></use>
                        </svg>
                    </a>
                </div>
            </section>
        );
    }
}

export default MoreTemplate;