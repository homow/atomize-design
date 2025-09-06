import {Component} from 'react';

class ReactAdvantageCircleBorder extends Component {
    render() {
        return (
            <div className={"mx-auto relative size-60 xs:size-80 lg:mx-0"}>
                <div className={"*:absolute"}>

                    {/* <=== circle border ===> */}
                    <div className={"w-full h-full -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-15"}></div>
                    <div className={"w-8/10 h-8/10 -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-25"}></div>
                    <div className={"w-6/10 h-6/10 -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-35"}></div>
                    <div className={"w-4/10 h-4/10 -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-45"}></div>

                    {/* <=== react icon ===> */}
                    <span className={"left-1/2 top-1/2 -translate-1/2 max-w-max"}>
                        <svg className={"size-12 xs:w-[4.375rem] xs:h-[4.5rem]"}>
                            <use href="#big-react-icon"></use>
                        </svg>
                    </span>

                    {/* <=== turn on green icon ===> */}
                    <span className={"top-5 right-21 w-12 h-6 rounded-full p-1.5 bg-green-700 shadow-primary flex items-center justify-end-safe"}>
                        <span className={"inline-block bg-white w-5 h-4 rounded-full z-10"}></span>
                    </span>

                    {/* <=== plus circle icon ===> */}
                    <span className={"bg-orange-300 rounded-full p-2 top-20 left-8 shadow-primary"}>
                        <svg className={"w-5 h-5 fill-primary-bg"}>
                            <use href="#plus-icon"></use>
                        </svg>
                    </span>

                    {/* <=== signup button ===> */}
                    <button type="button" className={"bg-blue-500 rounded-lg shadow-primary font-medium text-white bottom-16 transition-all right-0 hover:opacity-90 cursor-pointer px-2 py-1 text-xs xs:px-5 xs:py-2 xs:text-sm"}>Sign Up</button>

                    {/* <=== tick icon ===> */}
                    <span className={"rounded-lg shadow-primary bottom-10 left-6"}>
                        <svg className={"w-[1.6rem] h-[1.6rem]"}>
                            <use href="#tick-icon"></use>
                        </svg>
                    </span>
                </div>
            </div>
        );
    }
}

export default ReactAdvantageCircleBorder;