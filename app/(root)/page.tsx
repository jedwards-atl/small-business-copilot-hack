import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, TrendingUp, Users } from "lucide-react";

const features = [
  {
    title: "Make clear decisions, faster",
    description:
      "Get the insights you need to act with confidence. We've designed this tool to help you spend less time guessing and more time growing your business.",
    icon: Heart,
  },
  {
    title: "Get tailored business insights",
    description:
      "Our AI understand your business instantly. Skip the complex prompts and get the answers you need to move forward - from finding the right insurance to making confident business decisions.",
    icon: TrendingUp,
  },
  {
    title: "Connects with your tools",
    description:
      "We'll link with the platforms you already use. This gives you insights and answers based on your own business data, not generic examples.",
    icon: Users,
  },
];

export default function Home() {
  return (
    <div className="lg:h-screen w-full max-sm:overflow-x-hidden max-sm:px-4 bg-white">
      {/* Hero */}
      <section className="container mx-auto py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The AI Copilot For Your Small Business
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get Tailored Insights, No Prompts Needed
              </p>
            </div>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-8 text-xl"
            >
              <div className="flex flex-row  gap-2 items-center justify-center">
                Get Started
                <ArrowRight />
              </div>
            </Button>
          </div>

          <div className="relative max-sm:px-4">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full blur-3xl opacity-30 scale-150 overflow-x-hidden"></div>
            <div className="relative bg-gray-800 rounded-lg p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 mb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-2 ml-11">
                  <div className="h-2 bg-purple-200 rounded w-3/4"></div>
                  <div className="h-2 bg-purple-200 rounded w-1/2"></div>
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
                  <div className="h-1 bg-purple-400 rounded w-8"></div>
                  <div className="h-1 bg-purple-400 rounded w-6"></div>
                  <div className="h-1 bg-purple-400 rounded w-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-24">
          {features.map(({ title, description, icon: Icon }) => (
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
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
