import {Component} from 'react';

class PaymentBox extends Component {
    render() {
        return (
            <div className={"bg-primary-bg rounded-lg shadow-xs p-8 border border-gray-100 dark:border-gray-900"}>
                {/* <=== title ===> */}
                <div className={"border-b pb-6 border-border-gray"}>
                    <p className={"font-medium text-xl"}>$1,410.16</p>
                    <p className={"text-xs text-gray-lt"}>per month</p>
                </div>

                {/* <=== rate and info ===> */}
                <div className={"flex justify-between mt-6 flex-col gap-2 items-start xx:flex-row xx:items-center"}>
                    <div>
                        <p className={"text-sm "}>
                            Payment Card
                        </p>
                        <p className={"text-xs text-gray-lt"}>
                            Component
                        </p>
                    </div>

                    {/* <=== star icons and rated ===> */}
                    <div>
                        <div className={"*:w-4 *:h-4 flex flex-row items-center"}>
                            <svg className={"fill-blue-500"}>
                                <use href="#star-icon"></use>
                            </svg>
                            <svg className={"fill-blue-500"}>
                                <use href="#star-icon"></use>
                            </svg>
                            <svg className={"fill-blue-500"}>
                                <use href="#star-icon"></use>
                            </svg>
                            <svg className={"fill-blue-500"}>
                                <use href="#star-icon"></use>
                            </svg>
                            <svg className={"fill-gray-lt"}>
                                <use href="#star-icon"></use>
                            </svg>
                        </div>
                        <p className={"text-xs text-gray-lt"}>
                            Rated 4.0/5
                        </p>
                    </div>
                </div>

                <button type="button" className="mt-6 block max-w-max mx-auto bg-blue-500 text-white font-medium py-2 px-4 rounded-lg cursor-pointer hover:opacity-90 transition-all text-xs xx:text-sm">
                    Use this design system
                </button>
            </div>
        );
    }
}

export default PaymentBox;