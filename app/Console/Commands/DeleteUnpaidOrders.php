<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Enums\OrderStatus;

class DeleteUnpaidOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'orders:delete-unpaid';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete unpaid orders';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $unpaidOrders = Order::where('status', OrderStatus::Unpaid)->get();

        foreach ($unpaidOrders as $order) {
            $order->delete();
        }
        $this->info('Unpaid orders have been deleted successfully.');
    }
}
