export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                ` px-4  border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700  focus:outline-none
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
