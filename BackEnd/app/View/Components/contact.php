<?php

namespace App\View\Components;

use Illuminate\View\Component;

class contact extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
   
     public $phone,$fax,$mailbox,$email,$address,$country;
     public function __construct($phone,$fax,$mailbox,$address,$email,$country)
    {
        $this->phone=$phone;
        $this->fax=$fax;
        $this->mailbox=$mailbox;
        $this->address=$address;
        $this->email=$email;
        $this->country=$country;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.contact');
    }
}
