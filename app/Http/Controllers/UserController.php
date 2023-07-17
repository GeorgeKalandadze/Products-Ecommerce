<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $perPage = request('per_page', 5);
        $search = request('search', '');
        $query = User::query()
            ->where('name', 'like', "%{$search}%")
            ->paginate($perPage);
        return response()->json( $query );
    }

    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json('deleted user');
    }
}
