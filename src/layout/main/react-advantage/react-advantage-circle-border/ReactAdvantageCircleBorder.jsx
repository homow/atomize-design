import {Component} from 'react';

class ReactAdvantageCircleBorder extends Component {
    render() {
        return (
            <div className={"relative my-20 size-80"}>
                <div className={"*:absolute"}>

                    {/* <=== circle border ===> */}
                    <div className={"w-full h-full -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-15"}></div>
                    <div className={"w-8/10 h-8/10 -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-25"}></div>
                    <div className={"w-6/10 h-6/10 -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-35"}></div>
                    <div className={"w-4/10 h-4/10 -translate-1/2 rounded-full p-4 top-1/2 left-1/2 border-2 opacity-45"}></div>

                    {/* <=== react icon ===> */}
                    <span className={"left-1/2 top-1/2 -translate-1/2 max-w-max"}>
                        <svg className={"w-[4.375rem] h-[4.5rem]"}>
                            <use href="#big-react-icon"></use>
                        </svg>
                    </span>

                    {/* <=== turn on green icon ===> */}
                    <span className={"top-5 right-21 w-12 h-6 rounded-full p-2 bg-green-700 shadow-primary flex items-center justify-end-safe"}>
                        <span className={"inline-block bg-white w-5 h-4 rounded-full z-10"}></span>
                    </span>

                    {/* <=== plus circle icon ===> */}
                    <span className={"bg-orange-300 rounded-full p-2 top-20 left-8 shadow-primary"}>
                        <svg className={"w-5 h-5 fill-primary-bg"}>
                            <use href="#plus-icon"></use>
                        </svg>
                    </span>

                    {/* <=== signup button ===> */}

                    {/* <=== tick icon ===> */}
                </div>
            </div>
        );
    }
}

export default ReactAdvantageCircleBorder;