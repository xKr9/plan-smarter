<?php

namespace App\Http\Controllers;

use App\Http\Resources\ItineraryResource;
use App\Models\itineraries;
use Illuminate\Http\Request;

class ItineraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ['a' => 1];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\itineraries  $itineraries
     * @return \Illuminate\Http\Response
     */
    public function show(itineraries $itineraries)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\itineraries  $itineraries
     * @return \Illuminate\Http\Response
     */
    public function edit(itineraries $itineraries)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\itineraries  $itineraries
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, itineraries $itineraries)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\itineraries  $itineraries
     * @return \Illuminate\Http\Response
     */
    public function destroy(itineraries $itineraries)
    {
        //
    }
}
