
import { Bell, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
            <span className="text-navy-900 font-bold text-sm">PB</span>
          </div>
          <span className="font-display font-bold text-xl text-navy-900">
            PremiumBank
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-navy-700 hover:text-navy-900 font-medium transition-colors">
            Dashboard
          </a>
          <a href="#" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
            Accounts
          </a>
          <a href="#" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
            Cards
          </a>
          <a href="#" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
            Loans
          </a>
          <a href="#" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
            Support
          </a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative text-navy-600 hover:text-navy-900">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
              3
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 text-navy-700 hover:text-navy-900">
                <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-navy-700" />
                </div>
                <span className="hidden md:block font-medium">John Smith</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white border border-slate-200">
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium text-navy-900">John Smith</p>
                <p className="text-xs text-navy-600">john.smith@email.com</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-navy-700 hover:text-navy-900">
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-navy-700 hover:text-navy-900">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 hover:text-red-700">
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
