<?php

function calculatePercentage($value, $percentage)
{
    if ($percentage == 0) {
        return 0;
    }
    return $value - (($value / 100) * $percentage) ;
}
