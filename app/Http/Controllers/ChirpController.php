<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Gate;


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
        $chirps = Chirp::with('user') // this works because of the relationship defined in our chirps model and Chirp:: is accessing the chirps table
            ->latest()
            ->take(50)
            ->get()
            ->map(fn ($chirp) => [
                'id' => $chirp->id,
                'message' => $chirp->message,
                'created_at' => $chirp->created_at,
                'updated_at' => $chirp->updated_at,
                'user' => $chirp->user,
                'can' => [
                    'update' => auth()->check() && auth()->user()->can('update', $chirp),
                    'delete' => auth()->check() && auth()->user()->can('delete', $chirp),
                ],
            ]);

        return Inertia::render('home', [
            'chirps' => $chirps,
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
        ]);

        // request-> gets the current authenticated user then goes to the chirps and creates a new chirp using the validated data and the user_id using the relationship we define in the model
        $request->user()->chirps()->create($validated);

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
    public function edit(Chirp $chirp)
    {   
        Gate::authorize('update', $chirp); // uses the ChirpPolicy to decide if the user can delete this
        return Inertia::render('edit', [
            'chirp' => $chirp,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chirp $chirp)
    {  
        Gate::authorize('update', $chirp); // uses the ChirpPolicy to decide if the user can edit this
        // Validate
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        // Update
        $chirp->update($validated);

        return redirect('/')->with('success', 'Chirp updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chirp $chirp)
    {
        Gate::authorize('delete', $chirp); // uses the ChirpPolicy to decide if the user can delete this

        $chirp->delete();

        return redirect('/')->with('success', 'Chirp deleted!');
    }
}
