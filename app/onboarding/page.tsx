"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Laptop, Store, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const OnboardingPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const businessLocation = () => (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="shadow-lg border-none h-full w-lg">
        <CardHeader className="flex flex-col items-center pt-8 pb-8">
          <CardTitle>
            <h1 className="text-2xl font-semibold text-gray-900">
              Where do you conduct your business?
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full pb-8">
          <div className="flex flex-col gap-6 items-center h-full">
            <Toggle
              variant="outline"
              className="cursor-pointer p-16 w-5/8 flex flex-row items-center gap-2 border-gray-100 hover:bg-gray-100 hover:text-sb-primary text-sb-primary"
            >
              <Laptop className="w-6 h-6" />
              <p className="text-lg">Online</p>
            </Toggle>
            <Toggle
              variant="outline"
              className="cursor-pointer p-16 w-5/8 flex flex-row items-center border-gray-100 hover:bg-gray-100 hover:text-sb-primary text-sb-primary"
            >
              <div className="h-16 w-full flex flex-row gap-2 items-center justify-center">
                <Store className="w-20 h-20" />
                <p className="text-lg">Brick & Mortar</p>
              </div>
            </Toggle>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col items-center justify-center -mt-6">
        <Button
          onClick={() => api?.scrollTo(current + 1)}
          className="cursor-pointer bg-sb-primary hover:bg-sb-primary-hover text-white rounded-full w-12 h-12 flex flex-col items-center justify-center"
        >
          <ArrowRight className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );

  const apps = [
    { icon: "/apps/sb.png", height: 19, width: 69 },
    { icon: "/apps/shopify.png", height: 25, width: 80 },
    { icon: "/apps/g-calendar.png", height: 22, width: 73 },
    { icon: "/apps/g-analytics.png", height: 24, width: 101 },
    { icon: "/apps/instagram.png", height: 24, width: 101 },
    { title: "Xero", icon: "/apps/xero.png", height: 29, width: 29 },
  ];

  const softwares = () => (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="shadow-lg border-none h-full w-lg">
        <CardHeader className="flex flex-col items-center pt-8 pb-8">
          <CardTitle>
            <h1 className="text-2xl font-semibold text-gray-900">
              What software do you use?
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full pb-8">
          <div className="grid gap-4 grid-cols-2">
            {apps.map(({ icon, width }) => (
              <Toggle
                variant="outline"
                className="cursor-pointer p-16 col-span-1 w-full flex flex-row items-center gap-2 border-gray-100 hover:bg-gray-100"
              >
                <Image src={icon} alt={icon} width={width} height={30} />
              </Toggle>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col items-center justify-center -mt-6">
        <Link href="/chat">
          <Button className="cursor-pointer bg-sb-primary hover:bg-sb-primary-hover text-white rounded-full w-12 h-12 flex flex-col items-center justify-center">
            <ArrowRight className="w-8 h-8" />
          </Button>
        </Link>
      </div>
    </div>
  );

  const about = () => (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="shadow-lg border-none h-full w-lg">
        <CardHeader className="flex flex-col items-center pt-8 pb-8">
          <CardTitle>
            <h1 className="text-2xl font-semibold text-gray-900">
              Tell us about you and your business
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full flex flex-col gap-4 pb-8">
          <div className="flex flex-row gap-2 w-full">
            <div className="flex flex-col gap-1 w-full">
              <p className="text-gray-900 text-sm font-medium">First Name:</p>
              <Input
                placeholder="John"
                className="pl-5 bg-white border-gray-200 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="text-gray-900 text-sm font-medium">Last Name:</p>
              <Input
                placeholder="Doe"
                className="pl-5 bg-white border-gray-200 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 pb-6">
            <p className="text-gray-900 text-sm font-medium">Email Address:</p>
            <Input
              placeholder="john@simplybusiness.com"
              className="pl-5 bg-white border-gray-200 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-900 text-sm font-medium">Business Name:</p>
            <Input
              placeholder="Simply Business"
              className="pl-5 bg-white border-gray-200 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-900 text-sm font-medium">Website URL:</p>
            <Input
              placeholder="simplybusiness.com"
              className="pl-5 bg-white border-gray-200 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-900 text-sm font-medium">
              Main Business Need:
            </p>
            <Input
              placeholder="To grow my customer base"
              className="pl-5 bg-white border-gray-200 rounded-lg"
            />
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col items-center justify-center -mt-6">
        <Button
          onClick={() => api?.scrollTo(current + 1)}
          className="cursor-pointer bg-sb-primary hover:bg-sb-primary-hover text-white rounded-full w-12 h-12 flex flex-col items-center justify-center"
        >
          <ArrowRight className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );

  const items = [about(), businessLocation(), softwares()];

  return (
    <div className="w-full h-full items-center justify-center flex-col bg-gray-50 flex">
      <div className="container w-xl h-7/8 flex flex-col items-center">
        <Carousel setApi={setApi} className="w-full h-full">
          <CarouselContent className="h-200 w-full flex">
            {/* {items.map((item, index) => ( */}
            <CarouselItem className="flex flex-col items-center justify-center h-full w-lg py-16">
              <div className="h-full">{about()}</div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center justify-center h-full  w-lg py-16">
              <div className="h-full">{businessLocation()}</div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center justify-center h-full w-lg py-16">
              <div className="h-full">{softwares()}</div>
            </CarouselItem>
            {/* ))} */}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default OnboardingPage;
