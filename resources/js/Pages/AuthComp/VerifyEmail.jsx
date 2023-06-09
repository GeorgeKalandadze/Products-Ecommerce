import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <form onSubmit={submit} className="w-full">
                <div className="mt-4 flex items-center flex-col justify-between">
                    <PrimaryButton
                        processing={processing}
                        className=" p-3.5 bg-[#194f7d]  text-center"
                    >
                        Resend Verification Email
                    </PrimaryButton>

                    {/*<Link href={route("logout")} method="post" as="button">*/}
                    {/*    <SecondaryButton className="border-none  bg-[transparent] shadow-[unset]">*/}
                    {/*        Log Out*/}
                    {/*    </SecondaryButton>*/}
                    {/*</Link>*/}
                </div>
            </form>
        </GuestLayout>
    );
}
