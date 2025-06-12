import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Bell,
  Heart,
  Lightbulb,
  User,
  LucideProps,
  MoreHorizontal,
  ShoppingCart,
} from "lucide-react";
import React from "react";

const tiles = [
  {
    title: "Business Insurance",
    subtitle: "Congrats on the new warehouse!",
    description:
      "Hi Kiron, great news about the new warehouse. A new location can change your insurance needs, especially if you're hiring new staff. Let's make sure you're covered.",
    icon: Bell,
    appsUsed: [
      { title: "Shopify", icon: ShoppingCart },
      { title: "Xero", icon: User },
    ],
    deepDiveText: "Review Coverage",
  },
  {
    title: "Data Driven Insights",
    subtitle: "Predictive Sales Forecasting",
    description:
      "Let's turn your sales data and market trends into accurate forecasts that make budgeting and planning simple.",
    icon: Lightbulb,
    appsUsed: [],
    deepDiveText: "Get Started",
  },
  {
    title: "Integration to Social Media",
    subtitle: "Turn posts into new customers",
    description:
      "Find your most important posts and get clear steps to make them more effective.",
    icon: Heart,
    appsUsed: [],
    deepDiveText: "Get Started",
  },
];

const BusinessGrowthPage = () => {
  const tile = ({
    title,
    subtitle,
    description,
    appsUsed,
    icon: Icon,
    deepDiveText,
  }: {
    title: string;
    subtitle: string;
    description: string;
    appsUsed: {
      title: string;
      icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >;
    }[];
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    deepDiveText: string;
  }) => {
    return (
      <Card className="shadow-lg border-none h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex flex-row items-center gap-4">
            <Icon className="h-4 w-4 text-sb-primary" />
            <p className="text-lg font-bold text-gray-900">{title}</p>
          </CardTitle>
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <h3 className="text-md font-bold text-sb-primary-hover">
              {subtitle}
            </h3>

            <p className="text-gray-900">{description}</p>

            <div className="flex flex-row gap-6">
              {appsUsed.map(({ title, icon: Icon }, index) => (
                <div key={`${title}-${index}`}>
                  <p className="text-sm text-gray-600 font-medium mb-3">
                    App Used:
                  </p>
                  <div className="flex items-center space-x-3">
                    <Icon className="w-8 h-8 text-azure-400" />
                    <span className="text-sm text-gray-900 truncate">
                      {title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sb-primary font-normal border-b-1 border-sb-primary w-fit cursor-pointer hover:font-medium">
              {deepDiveText}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div>
      {/* Content Title & Description */}
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Support for your growing business
        </h1>
        <p className="text-gray-900">
          Business growth means more to manage. SimplyPilot helps you handle the
          complexity, so you can focus on what&apos;s next.
        </p>
      </div>

      {/* Growth Ideas Grid */}
      <div className="w-full flex flex-col gap-8">
        <div className="w-3/5">{tile(tiles[0])}</div>

        <div className="w-full flex flex-row gap-6">
          {tile(tiles[1])}
          {tile(tiles[2])}
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowthPage;
