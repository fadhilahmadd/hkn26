"use client";
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-[4%] max-w-4xl mx-auto text-white/90">
      <h1 className="text-4xl md:text-5xl font-black font-nunito tracking-tight mb-8 text-white">
        Privacy <span className="text-[#8baa37]">Policy</span>
      </h1>
      
      <div className="prose prose-invert prose-lg max-w-none space-y-6">
        <p className="text-white/70 italic">Last Updated: September 2026</p>
        
        <p>
          At HKN62 Fun Run (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to protecting the privacy and security of our participants&apos; personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or register for our event in Alun Alun Wonosobo.
        </p>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">1. Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when registering for the HKN62 Fun Run. This includes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Identity Data:</strong> Full name, gender, date of birth, and nationality.</li>
          <li><strong>Contact Data:</strong> Email address, phone number, and physical address.</li>
          <li><strong>Emergency Information:</strong> Name, relationship, and contact number of an emergency contact.</li>
          <li><strong>Medical Data:</strong> Information regarding any pre-existing medical conditions that are strictly necessary for your safety during the event.</li>
          <li><strong>Transaction Data:</strong> Payment details, billing address, and registration category (e.g., Umum, Pelajar, Instansi Kesehatan).</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">2. How We Use Your Information</h2>
        <p>The information we collect is used primarily to ensure a safe and organized running event. Specifically, we use your data to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Process your registration, payment, and issue your official race bib.</li>
          <li>Communicate with you regarding race day instructions, package collection, and event updates.</li>
          <li>Provide medical assistance in the event of an emergency on the race route.</li>
          <li>Publish official race results, timing data, and podium announcements.</li>
          <li>Send promotional materials or surveys related to future HKN Fun Run events (you may opt-out at any time).</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">3. Data Sharing and Disclosure</h2>
        <p>We do not sell, trade, or rent your personal identification information to third parties. We may share your information only under the following circumstances:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website, processing payments, or timing the race (e.g., our official registration portal tias.co.id).</li>
          <li><strong>Medical Personnel:</strong> With on-site medical staff, hospitals, or emergency responders if you require medical attention during the event.</li>
          <li><strong>Legal Requirements:</strong> If required by law, court order, or governmental authority to disclose your information to protect our rights or the safety of others.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">4. Media and Photography</h2>
        <p>
          By participating in the HKN62 Fun Run, you consent to the capture of your image via photography, videography, and drone footage along the 5K route and event village. These media files may be used in our official gallery, social media pages, and promotional materials. Your name and finishing time may be published alongside these images.
        </p>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">5. Data Retention</h2>
        <p>
          We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as legally required for tax, accounting, and regulatory purposes.
        </p>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">6. Your Rights</h2>
        <p>
          You have the right to request access to the personal data we hold about you, request corrections to any inaccurate data, or request the deletion of your data (subject to legal and operational constraints prior to race day). To exercise these rights, please contact us at info@hknrun62.com.
        </p>
      </div>
    </div>
  );
}
