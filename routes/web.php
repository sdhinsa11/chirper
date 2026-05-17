<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChirpController;
use Laravel\Fortify\Features;

// Route::inertia('/', 'home', [ // ::intertia to load the pages - which is on the homepage route and 'welcome' is the page to render
//     'canRegister' => Features::enabled(Features::registration()), // the canRegister is a prop being passed to determine if they are registered to show the button or not
// ])->name('home'); // give the route a name so that it's useful for redirects or links

// replacing the router with a controller
Route::get('/', [ChirpController::class, 'index'])->name('home');

// this middleware is a protection layer - and all routes in this group need to be authenticated and verified when the dashboard page is rendered (second 'dashboard' is the react page and the first is the link to the dashboard)
// displayed after the user logs in or registers and ensures that the user is authenticated and verified and if the user is not it won't be shown
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
