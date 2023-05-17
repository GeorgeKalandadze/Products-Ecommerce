import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/AuthComponents/InputError.jsx';
import InputLabel from '@/Components/AuthComponents/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/AuthComponents/TextInput.jsx';
import { Head, Link, useForm } from '@inertiajs/react';
import Header from "@/Components/AuthComponents/Header";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout header={<Header
            labelText="Enter our Ecommerce Website"
            linkText="Don’t have an account?"
        />
        }>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4 flex-col">


                    <PrimaryButton className="w-full p-3.5 bg-[#194f7d] mb-6 text-center" disabled={processing}>
                        Log in
                    </PrimaryButton>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-[#008bd2] hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>
            </form>
        </GuestLayout>
    );
}
