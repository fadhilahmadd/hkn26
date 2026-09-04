"use client";
import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-[4%] max-w-4xl mx-auto text-white/90">
      <h1 className="text-4xl md:text-5xl font-black font-nunito tracking-tight mb-8 text-white">
        Terms of <span className="text-[#8baa37]">Service</span>
      </h1>
      
      <div className="prose prose-invert prose-lg max-w-none space-y-6">
        <p className="text-white/70 italic">Last Updated: September 2026</p>
        
        <p>
          Welcome to the HKN62 Fun Run 2026 (&quot;Event&quot;). By registering for and participating in the Event, you (&quot;Participant&quot;) agree to be bound by the following Terms of Service (&quot;Terms&quot;). Please read them carefully before submitting your registration.
        </p>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">1. Registration & Participation</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Eligibility:</strong> The 5K event is open to participants of all ages. However, participants under the age of 17 must provide written consent from a parent or legal guardian. The maximum recommended age is 65 years.</li>
          <li><strong>Registration Fee:</strong> The registration fee for the 5K category (Umum, Pelajar, or Instansi Kesehatan) is Rp. 150.000,-.</li>
          <li><strong>Finality of Registration:</strong> All registrations are final. The registration fee is strictly non-refundable and non-transferable under any circumstances, including if the participant cannot attend the Event.</li>
          <li><strong>Bib Numbers:</strong> Your race bib is specific to you and must not be sold, transferred, or exchanged. Anyone found participating with another person&apos;s bib will be immediately disqualified and banned from future events.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">2. Health & Safety</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Medical Fitness:</strong> By registering, you declare that you are physically fit and medically cleared to participate in a 5K run. We strongly recommend seeking medical advice if you have pre-existing health conditions or are pregnant.</li>
          <li><strong>Assumption of Risk:</strong> You acknowledge that running is a physically demanding sport that carries inherent risks, including but not limited to injuries, falls, contact with other participants, weather effects, and traffic conditions. You assume all risks associated with participation.</li>
          <li><strong>Medical Treatment:</strong> In the event of an emergency, you consent to receive medical treatment administered by the Event&apos;s official medical staff. The Organizer is not responsible for the costs of medical treatments beyond the immediate first-aid provided on-site.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">3. Event Rules & Cut-off Times</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Time Limit:</strong> The official cut-off time for the 5K route is 1 hour and 30 minutes from the Gun Start. Participants who do not finish within this time will not be eligible for official timing or podium placements.</li>
          <li><strong>Prohibited Items:</strong> Bicycles, roller skates, skateboards, wheelchairs (unless in a designated category), and strollers are not permitted on the course. Pets are strictly prohibited.</li>
          <li><strong>Unsportsmanlike Conduct:</strong> Any participant found taking shortcuts, using motorized transport, blocking others, or failing to follow the marshals&apos; instructions will be instantly disqualified.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">4. Force Majeure & Cancellations</h2>
        <p>
          If the Event is canceled, delayed, or altered due to circumstances beyond the Organizer&apos;s control (&quot;Force Majeure&quot;)—including but not limited to severe weather conditions, natural disasters, protests, riots, or government mandates—the Organizer holds no liability. Under such circumstances, registration fees will not be refunded, and the Organizer is not liable for any incurred travel or accommodation expenses.
        </p>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">5. Image Rights & Media</h2>
        <p>
          By participating, you grant the Organizer and its sponsors the irrevocable, worldwide, royalty-free right to use your name, image, voice, and likeness in any photographs, video recordings, or promotional materials generated during the Event for broadcast, marketing, or commercial purposes.
        </p>

        <h2 className="text-2xl font-bold text-[#8baa37] mt-10 mb-4">6. Amendments</h2>
        <p>
          The Organizer reserves the right to amend, add, or modify these Terms of Service at any time without prior notice. The latest version will always be available on this website, and continued participation constitutes acceptance of any updated Terms.
        </p>
      </div>
    </div>
  );
}
