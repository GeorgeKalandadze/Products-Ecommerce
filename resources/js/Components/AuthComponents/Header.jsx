
export default function Header ({labelText, link, linkText}){
    return(
        <div className="mt-4 flex flex-col items-center gap-2">
            <h1 className="text-[30px] font-bold">{labelText}</h1>
            <p className="text-gray-400">{linkText} <a className="text-[#008bd2]" href={route('register')}>Sign Up</a></p>
        </div>
    )
}
