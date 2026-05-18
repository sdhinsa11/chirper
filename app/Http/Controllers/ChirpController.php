<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Chirp;

class ChirpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     $chirps = [
    //         [
    //             'author' => 'Jane Doe',
    //             'message' => 'Just deployed my first Laravel app! 🚀',
    //             'time' => '5 minutes ago'
    //         ],
    //         [
    //             'author' => 'John Smith',
    //             'message' => 'Laravel makes web development fun again!',
    //             'time' => '1 hour ago'
    //         ],
    //         [
    //             'author' => 'Alice Johnson',
    //             'message' => 'Working on something cool with Chirper...',
    //             'time' => '3 hours ago'
    //         ]
    //     ];

    //     return Inertia::render('home', [
    //         'chirps' => $chirps
    //     ]);
    // }

    public function index()
    {
        $chirps = Chirp::with('user') // grabs the 
            ->latest()
            ->take(50)  // Limit to 50 most recent chirps
            ->get();

        return Inertia::render('home', [
            'chirps' => $chirps
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage. ( in this case the resource is a chirp )
     */
    public function store(Request $request)
        {
            $validated = $request->validate([
                'message' => 'required|string|max:255',
            ], [
                'message.required' => 'Please write something to chirp!',
                'message.max' => 'Chirps must be 255 characters or less.',
            ]);

            \App\Models\Chirp::create([
                'message' => $validated['message'],
                'user_id' => null,
            ]);

            return redirect('/')->with('success', 'Your chirp has been posted!');
        }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
