<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class XSS
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $input = $request->all();
            array_walk_recursive($input, function (&$input) {
                $input = strip_tags($input, ['p', 'img', 'blockquote', 'hr ', 'table', 'tbody', 'tr', 'td', 'strong', 'em', 's', 'tt', 'a']);
                $input = trim($input);
                $input = stripslashes($input);
            });

        $request->merge($input);
        return $next($request);
    }
}
