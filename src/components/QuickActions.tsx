
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, CreditCard, PiggyBank, Phone, Zap } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      title: "Transfer Money",
      description: "Send to accounts or people",
      icon: ArrowUpRight,
      color: "bg-blue-50 text-blue-600 hover:bg-blue-100"
    },
    {
      title: "Deposit Check",
      description: "Mobile check deposit",
      icon: ArrowDownLeft,
      color: "bg-green-50 text-green-600 hover:bg-green-100"
    },
    {
      title: "Pay Bills",
      description: "Schedule payments",
      icon: CreditCard,
      color: "bg-purple-50 text-purple-600 hover:bg-purple-100"
    },
    {
      title: "Save Goals",
      description: "Track your progress",
      icon: PiggyBank,
      color: "bg-pink-50 text-pink-600 hover:bg-pink-100"
    },
    {
      title: "Mobile Recharge",
      description: "Top up your phone",
      icon: Phone,
      color: "bg-orange-50 text-orange-600 hover:bg-orange-100"
    },
    {
      title: "Utilities",
      description: "Pay electricity, water",
      icon: Zap,
      color: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card className="hover-lift bg-white/80 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle className="text-navy-900">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {actions.map((action) => {
              const IconComponent = action.icon;
              return (
                <Button
                  key={action.title}
                  variant="ghost"
                  className={`h-auto p-4 flex flex-col items-center space-y-2 ${action.color} transition-all duration-200 hover:scale-105`}
                >
                  <IconComponent className="w-6 h-6" />
                  <div className="text-center">
                    <div className="font-medium text-sm">{action.title}</div>
                    <div className="text-xs opacity-80">{action.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Financial Insights */}
      <Card className="hover-lift bg-gradient-to-br from-gold-50 to-yellow-50 border-gold-200">
        <CardHeader>
          <CardTitle className="text-navy-900 flex items-center">
            💡 Financial Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white/60 rounded-lg">
            <div className="font-medium text-navy-900 mb-1">Spending Analysis</div>
            <div className="text-sm text-navy-600">
              You've spent 15% less on dining this month. Great job!
            </div>
          </div>
          <div className="p-4 bg-white/60 rounded-lg">
            <div className="font-medium text-navy-900 mb-1">Savings Goal</div>
            <div className="text-sm text-navy-600">
              You're 78% towards your vacation fund goal.
            </div>
          </div>
          <Button className="w-full bg-navy-700 hover:bg-navy-800 text-white">
            View Detailed Report
          </Button>
        </CardContent>
      </Card>

      {/* Premium Services */}
      <Card className="hover-lift premium-gradient text-white premium-shadow">
        <CardHeader>
          <CardTitle className="flex items-center">
            ⭐ Premium Services
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm opacity-90">
            Unlock exclusive features with our premium banking services
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
              Priority customer support
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
              Higher transaction limits
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
              Investment advisory
            </li>
          </ul>
          <Button className="w-full gold-gradient text-navy-900 font-semibold hover:opacity-90">
            Upgrade Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActions;
