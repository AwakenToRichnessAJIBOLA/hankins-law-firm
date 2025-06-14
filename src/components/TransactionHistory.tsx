
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, ShoppingBag, Car, Home, Coffee } from "lucide-react";

interface TransactionHistoryProps {
  detailed?: boolean;
}

const TransactionHistory = ({ detailed = false }: TransactionHistoryProps) => {
  const transactions = [
    {
      id: 1,
      description: "Salary Deposit",
      amount: 5500.00,
      type: "credit",
      category: "Income",
      date: "2024-06-14",
      time: "09:30 AM",
      icon: ArrowDownLeft,
      merchant: "ABC Corporation"
    },
    {
      id: 2,
      description: "Grocery Shopping",
      amount: -127.45,
      type: "debit",
      category: "Food & Dining",
      date: "2024-06-13",
      time: "06:45 PM",
      icon: ShoppingBag,
      merchant: "Whole Foods Market"
    },
    {
      id: 3,
      description: "Gas Station",
      amount: -65.30,
      type: "debit",
      category: "Transportation",
      date: "2024-06-13",
      time: "02:15 PM",
      icon: Car,
      merchant: "Shell Gas Station"
    },
    {
      id: 4,
      description: "Mortgage Payment",
      amount: -2200.00,
      type: "debit",
      category: "Housing",
      date: "2024-06-12",
      time: "12:00 PM",
      icon: Home,
      merchant: "First National Bank"
    },
    {
      id: 5,
      description: "Coffee Shop",
      amount: -4.75,
      type: "debit",
      category: "Food & Dining",
      date: "2024-06-12",
      time: "08:20 AM",
      icon: Coffee,
      merchant: "Starbucks"
    },
    {
      id: 6,
      description: "Investment Return",
      amount: 850.25,
      type: "credit",
      category: "Investment",
      date: "2024-06-11",
      time: "03:00 PM",
      icon: ArrowDownLeft,
      merchant: "Vanguard"
    }
  ];

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Math.abs(amount));
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Income": "bg-green-100 text-green-800",
      "Food & Dining": "bg-orange-100 text-orange-800",
      "Transportation": "bg-blue-100 text-blue-800",
      "Housing": "bg-purple-100 text-purple-800",
      "Investment": "bg-gold-100 text-gold-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="hover-lift bg-white/80 backdrop-blur-sm border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-navy-900">
          <span>Recent Transactions</span>
          {!detailed && (
            <Badge variant="outline" className="bg-navy-50 text-navy-700 border-navy-200">
              Last 7 days
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.slice(0, detailed ? transactions.length : 5).map((transaction) => {
          const IconComponent = transaction.icon;
          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 transition-colors border border-slate-100"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'credit' ? 'bg-green-100' : 'bg-slate-100'
                }`}>
                  <IconComponent className={`w-5 h-5 ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-slate-600'
                  }`} />
                </div>
                <div>
                  <div className="font-medium text-navy-900">{transaction.description}</div>
                  <div className="text-sm text-navy-600">
                    {transaction.merchant} • {transaction.date} {transaction.time}
                  </div>
                  {detailed && (
                    <Badge 
                      className={`mt-1 text-xs ${getCategoryColor(transaction.category)}`}
                      variant="secondary"
                    >
                      {transaction.category}
                    </Badge>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${
                  transaction.type === 'credit' ? 'text-green-600' : 'text-navy-900'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'}{formatAmount(transaction.amount)}
                </div>
                <div className="text-xs text-navy-500">
                  {transaction.type === 'credit' ? 'Credit' : 'Debit'}
                </div>
              </div>
            </div>
          );
        })}
        
        {!detailed && (
          <button className="w-full py-3 text-navy-600 hover:text-navy-900 font-medium transition-colors border-t border-slate-200">
            View All Transactions
          </button>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
