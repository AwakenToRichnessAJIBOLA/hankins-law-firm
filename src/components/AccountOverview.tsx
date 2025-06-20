
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";

const AccountOverview = () => {
  const [showBalances, setShowBalances] = useState(true);

  const accounts = [
    {
      id: 1,
      name: "Premium Checking",
      type: "Checking",
      balance: 12450.75,
      accountNumber: "****1234",
      change: 2.5,
      positive: true
    },
    {
      id: 2,
      name: "High Yield Savings",
      type: "Savings",
      balance: 45780.30,
      accountNumber: "****5678",
      change: 5.2,
      positive: true
    },
    {
      id: 3,
      name: "Investment Portfolio",
      type: "Investment",
      balance: 128900.45,
      accountNumber: "****9012",
      change: -1.8,
      positive: false
    }
  ];

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  const formatBalance = (amount: number) => {
    return showBalances 
      ? new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
        }).format(amount)
      : '••••••';
  };

  return (
    <div className="space-y-6">
      {/* Total Balance Card */}
      <Card className="premium-gradient text-white premium-shadow hover-lift">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-2xl font-display">Total Balance</CardTitle>
            <p className="text-blue-100">Across all accounts</p>
          </div>
          <button
            onClick={() => setShowBalances(!showBalances)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {showBalances ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
          </button>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold font-display mb-2">
            {formatBalance(totalBalance)}
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-300" />
            <span className="text-green-300 text-sm">+2.1% from last month</span>
          </div>
        </CardContent>
      </Card>

      {/* Individual Accounts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accounts.map((account) => (
          <Card key={account.id} className="hover-lift bg-white/80 backdrop-blur-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg text-navy-900">{account.name}</CardTitle>
                <p className="text-sm text-navy-600">{account.accountNumber}</p>
              </div>
              <Badge 
                variant="outline" 
                className="bg-navy-50 text-navy-700 border-navy-200"
              >
                {account.type}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-navy-900 mb-2">
                {formatBalance(account.balance)}
              </div>
              <div className="flex items-center space-x-1">
                {account.positive ? (
                  <TrendingUp className="w-4 h-4 text-green-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm ${account.positive ? 'text-green-600' : 'text-red-500'}`}>
                  {account.positive ? '+' : ''}{account.change}%
                </span>
                <span className="text-navy-500 text-sm">this month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AccountOverview;
