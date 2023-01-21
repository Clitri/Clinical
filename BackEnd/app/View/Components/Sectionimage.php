<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Sectionimage extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $images;
    public function __construct($images)
    {
        $this->images=$images;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.sectionimage');
    }
}
