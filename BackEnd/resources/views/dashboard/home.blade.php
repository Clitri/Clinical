@if(auth()->user()->hasRole('Researcher') || auth()->user()->hasRole('Assistant'))

    @include('dashboard.content.study.manage-plan');

@endif
