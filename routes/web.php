<?php

use App\Http\Controllers\UserController;
use App\Models\Role;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::resource('users',UserController::class)->names('users');
/*Route::resource('roles', RoleController::class)->names('roles');*/

require __DIR__.'/settings.php';
