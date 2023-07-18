<?php

namespace App\Enums;

enum OrderStatus: string
{
    case Unpaid = 'unpaid';
    case Paid = 'paid';
    case Cancelled = 'cancelled';
    case Shipped = 'shipped';
    case Completed = 'completed';
}

