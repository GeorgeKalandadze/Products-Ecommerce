import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import InputError from "@/Components/AuthComps/InputError";
import InputLabel from "@/Components/AuthComps/InputLabel";
import PrimaryButton from "@/Components/AuthComps/PrimaryButton";
import TextInput from "@/Components/AuthComps/TextInput";
import { Head, useForm } from "@inertiajs/react";
import "../style/Auth.css";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="mb-6 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form onSubmit={submit} className="w-full">
                <div className="mt-4">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                        label="Password"
                        placeholder=" "
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-center w-full ">
                    <PrimaryButton
                        className=" global_login_btn color-1 font-[poppins-medium] !mt-[0]"
                        processing={processing}
                    >
                        Confirm
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
