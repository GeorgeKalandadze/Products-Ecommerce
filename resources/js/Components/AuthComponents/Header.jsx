import {Link} from "@inertiajs/react";

export default function Header ({labelText, link, linkText,page}){
    return(
        <div className="mt-4 flex flex-col items-center gap-2">
            <h1 className="text-[30px] font-bold text-center">{labelText}</h1>
            <p className="text-gray-400">{linkText} <Link className="text-[#008bd2]" href={route(link)}>{page}</Link></p>
        </div>
    )
}
