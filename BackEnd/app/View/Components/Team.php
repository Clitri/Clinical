<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Team extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */public $team;
    public function __construct($team)
    {
      $this->team=$team;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.team');
    }
}
