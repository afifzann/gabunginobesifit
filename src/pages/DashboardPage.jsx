import React from "react";
import Layouts from "@/components/layouts/Layouts";
import Header from "@/components/fragments/landingpage/Hero";
import Tentang from "@/components/fragments/landingpage/Tentang";
import Fitur from "@/components/fragments/landingpage/Fitur";
import Kalkulator from "@/components/fragments/landingpage/Kalkulator";
import Dokter from "@/components/fragments/landingpage/Dokter";
import ReviewSection from "@/components/fragments/landingpage/ReviewSection";


export default function DashboardPage() {
  return (
    <Layouts>
      <Header/>
      <Tentang />
      <Fitur/>
      <Kalkulator/>
      <Dokter/>
      <ReviewSection/>
    </Layouts>
  );
}
