import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Connect Your World. Get Personalised AI.",
    description:
      "Link your daily apps like Xero & Shopify to one AI co-pilot. Get insights driven purely by your business data, not generic advice.",
    icon: Heart,
  },
  {
    title: "Simplify Your Day. Grow Your Dreams.",
    description:
      "Cut through the app clutter. Business Buddy puts all your business data in one simple place. Designed for non-tech users, it saves hours, letting you focus on real growth.",
    icon: TrendingUp,
  },
  {
    title: "Trusted Insights. Every step of the way.",
    description:
      "We help you navigate the risks of scaling your business. At every growth stage of your journey, we'll steer you in the right direction.",
    icon: Users,
  },
];

export default function Home() {
  return (
    <div className="h-full w-full max-sm:overflow-x-hidden max-sm:px-4 bg-white">
      {/* Hero */}
      <section className="container mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Finally, AI that knows<br /><em>your</em> business
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
              An AI Assistant that leverages <strong>unique business data</strong> to help<br />the small business owner scale and mitigate risk throughout<br />every growth stage of their business.
              </p>
            </div>
            <Link href="/chat">
              <Button
                size="lg"
                className="bg-sb-primary hover:bg-azure-600 text-white max-sm:px-6 max-sm:py-6 px-8 py-8 max-sm:text-lg text-xl cursor-pointer"
              >
                <div className="flex flex-row  gap-2 items-center justify-center">
                  Start Your Free Trial
                  <ArrowRight />
                </div>
              </Button>
            </Link>
          </div>

          <div className="relative max-sm:px-4">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-azure-400 rounded-full blur-3xl opacity-30 scale-100 overflow-x-hidden"></div>
            <div className="relative bg-gray-800 rounded-lg p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 mb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-sb-primary-hover rounded-full"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-2 ml-11">
                  <div className="h-2 bg-azure-400 rounded w-3/4"></div>
                  <div className="h-2 bg-azure-400 rounded w-1/2"></div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="space-y-1">
                  <div className="h-1 bg-azure-400 rounded w-8"></div>
                  <div className="h-1 bg-azure-400 rounded w-6"></div>
                  <div className="h-1 bg-azure-400 rounded w-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12">
        <div className="grid md:grid-cols-3 gap-12 md:gap-24">
          {features.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-4 text-center space-y-4">
                <div className="w-16 h-16 bg-sb-primary-hover rounded-full flex items-center justify-center mx-auto">
                  <Icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
