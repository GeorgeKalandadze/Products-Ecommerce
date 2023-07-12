import GuestLayout from "@/Layouts/GuestLayout.jsx";
import InputError from "@/Components/AuthComponents/InputError";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import TextInput from "@/Components/AuthComponents/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton.jsx";


export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-8 text-sm text-gray-600 ">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one .
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="w-full">
                <TextInput
                    id="password"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full "
                    isFocused={true}
                    handleChange={onHandleChange}
                    placeholder=" "
                    label="Email"
                />

                <InputError message={errors.email} className="mt-[-30px]" />

                <div className="flex items-center flex-col ">
                    <PrimaryButton
                        className=" p-3.5 bg-[#194f7d] mt-6 text-center"
                        processing={processing}
                    >
                        {/* Email Password Reset Link */}
                        Email Password Reset Link
                    </PrimaryButton>
                    {/*<Link href={route("login")} className="mt-[20px]">*/}
                    {/*    <SecondaryButton className="border-none  bg-[transparent] shadow-[unset]">*/}
                    {/*        Back*/}
                    {/*    </SecondaryButton>*/}
                    {/*</Link>*/}
                </div>
            </form>
        </GuestLayout>
    );
}
