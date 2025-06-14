
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountOverview from "@/components/AccountOverview";
import TransactionHistory from "@/components/TransactionHistory";
import QuickActions from "@/components/QuickActions";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="animate-fade-in">
          <div className="mb-2">
            <h1 className="text-4xl font-display font-bold text-navy-900 mb-2">
              Good morning, John
            </h1>
            <p className="text-navy-600 text-lg">
              Welcome back to your premium banking experience
            </p>
          </div>
          <Badge variant="secondary" className="bg-gold-100 text-gold-800 border-gold-200">
            Premium Member
          </Badge>
        </div>

        {/* Account Overview */}
        <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
          <AccountOverview />
        </div>

        {/* Main Content Tabs */}
        <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-[500px] bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="overview" className="data-[state=active]:bg-navy-700 data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="transactions" className="data-[state=active]:bg-navy-700 data-[state=active]:text-white">
                Transactions
              </TabsTrigger>
              <TabsTrigger value="transfer" className="data-[state=active]:bg-navy-700 data-[state=active]:text-white">
                Transfer
              </TabsTrigger>
              <TabsTrigger value="invest" className="data-[state=active]:bg-navy-700 data-[state=active]:text-white">
                Invest
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <TransactionHistory />
                </div>
                <div>
                  <QuickActions />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-6">
              <TransactionHistory detailed={true} />
            </TabsContent>

            <TabsContent value="transfer" className="space-y-6">
              <Card className="premium-shadow hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-900">
                    Transfer Money
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-navy-600">Transfer feature coming soon with enhanced security.</p>
                    <Button className="w-full bg-navy-700 hover:bg-navy-800 text-white">
                      Set Up Transfer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="invest" className="space-y-6">
              <Card className="premium-shadow hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-900">
                    Investment Portfolio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-navy-600">Premium investment options tailored for you.</p>
                    <Button className="w-full gold-gradient text-navy-900 font-semibold hover:opacity-90">
                      Explore Investments
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;
