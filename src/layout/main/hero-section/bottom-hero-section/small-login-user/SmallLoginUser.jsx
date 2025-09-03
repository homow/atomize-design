import {Component} from 'react';

class SmallLoginUser extends Component {
    render() {
        return (
            <div className={"shadow-rounded-box text-center px-6 py-9 space-y-14"}>
                <div className={"space-y-2"}>
                    <p className={"text-xl font-medium -tracking-tight"}>Login into your account</p>
                    <p className={"text-gray-lt text-xs"}>Don`t have an account yet? <span className={"text-blue-500 font-medium cursor-pointer"}>Create New</span></p>
                </div>

                <div className={"flex flex-col gap-4"}>
                    <label htmlFor={"mail-input"} className={"relative rounded-full pl-2 pr-8 py-2 border border-border-gray focus-within:border-blue-500 transition-all"}>
                        <input placeholder={"mail@example.co"} id={"mail-input"} className={"w-full block peer outline-none grow text-sm xs:text-base placeholder:text-sm"} type="text"/>
                        <svg className={"absolute top-1/2 -translate-1/2 right-0 size-5 fill-gray-lt"}>
                            <use href="#mail-icon"></use>
                        </svg>
                    </label>
                    <label htmlFor={"password-input"} className={"relative rounded-full pl-2 pr-8 py-2 border border-border-gray focus-within:border-blue-500 transition-all"}>
                        <input placeholder={"Password"} id={"password-input"} className={"w-full block peer outline-none grow text-sm xs:text-base placeholder:text-sm"} type="text"/>
                        <svg className={"absolute top-1/2 -translate-1/2 right-0 size-5 fill-gray-lt"}>
                            <use href="#Eye-icon"></use>
                        </svg>
                    </label>
                </div>

                <button type={"button"} className={"btn-bg-blue block w-full"}>Login</button>
            </div>
        );
    }
}

export default SmallLoginUser;