
import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-950 min-h-screen text-white pt-32 pb-20 font-sans relative">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">AQIONLABS and AQIONVOX.AI</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">MASTER SUBSCRIPTION AGREEMENT (MSA)</h2>
        
        <div className="prose prose-lg prose-invert text-slate-400 max-w-none space-y-8">
            <section>
                <p>This Master Subscription Agreement (“Agreement” or “MSA”) is entered into between:</p>
                <p className="pl-4 border-l-2 border-indigo-500/50 my-4">
                    <strong>AqionLabs FZ-LLC</strong>, a company incorporated in the United Arab Emirates (“AqionLabs”, “Company”, “Processor”, “We”, “Us”),
                    <br/><br/>
                    and
                    <br/><br/>
                    <strong>You</strong>, or the legal entity you represent (“Customer”, “Controller”, “You”).
                </p>
                <p>This Agreement governs your access to and use of AqionLabs cloud-based software, AI platforms, contact centre solutions, voice AI, WhatsApp AI, and related services (collectively, the “Services”).</p>
                <p>By accessing or using the Services, you agree to be bound by this Agreement.</p>
                <p><strong>Effective Date:</strong> The date of subscription, execution, or first use of the Services.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">1. DEFINITIONS</h3>
                <p>For the purposes of this Agreement:</p>
                <p><strong>“Applicable Law”</strong> means the laws of the United Arab Emirates, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>UAE Civil Transactions Law</li>
                    <li>UAE Commercial Transactions Law</li>
                    <li>Federal Decree Law No. 45 of 2021 (UAE Personal Data Protection Law – PDPL)</li>
                    <li>UAE Cybercrime Law</li>
                    <li>Any applicable DIFC or ADGM regulations (if applicable)</li>
                </ul>
                <p className="mt-4"><strong>“Personal Data”</strong> shall have the meaning set forth under UAE PDPL and any applicable data protection legislation.</p>
                <p><strong>“Services”</strong> means AqionLabs’ cloud-based software, AI systems, contact center solutions, and related services.</p>
                <p><strong>“Subscription Term”</strong> means the period during which the Customer is authorized to use the Services.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">2. SCOPE OF SERVICES</h3>
                <p><strong>2.1</strong> AqionLabs shall provide the Services as described in the applicable Order Form, Product Agreement, or Pricing Schedule.</p>
                <p><strong>2.2</strong> The Services may include:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Cloud contact center software</li>
                    <li>AI-powered voice and messaging systems</li>
                    <li>AI revenue automation tools</li>
                    <li>Analytics and reporting tools</li>
                    <li>Integrations and related support services</li>
                </ul>
                <p className="mt-4"><strong>2.3</strong> AqionLabs acts as a Data Processor where it processes Personal Data on behalf of the Customer, who acts as the Data Controller.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">3. TERM AND TERMINATION</h3>
                <div className="space-y-4">
                    <div>
                        <strong>3.1 Initial Term</strong>
                        <p>This Agreement shall commence on the Effective Date and continue for twelve (12) months unless otherwise specified.</p>
                    </div>
                    <div>
                        <strong>3.2 Renewal</strong>
                        <p>The Agreement shall automatically renew for successive 12-month terms unless either party provides written notice of non-renewal at least thirty (30) days prior to expiration.</p>
                    </div>
                    <div>
                        <strong>3.3 Termination for Convenience</strong>
                        <p>Either party may terminate this Agreement with thirty (30) days’ written notice.</p>
                        <p>All fees accrued prior to termination remain payable. Subscription fees are non-refundable unless otherwise stated in writing.</p>
                    </div>
                    <div>
                        <strong>3.4 Termination for Cause</strong>
                        <p>Either party may terminate immediately if:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>A material breach occurs and is not cured within thirty (30) days</li>
                            <li>The other party becomes insolvent or ceases business operations</li>
                        </ul>
                    </div>
                    <div>
                        <strong>3.5 Effect of Termination</strong>
                        <p>Upon termination:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Customer access to the Services will cease</li>
                            <li>AqionLabs will delete or return Customer data in accordance with PDPL and contractual terms</li>
                            <li>Outstanding fees remain due</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">4. FEES AND PAYMENT</h3>
                <p><strong>4.1</strong> Fees are as stated in the applicable Order Form or Pricing Agreement.</p>
                <p><strong>4.2</strong> All fees are exclusive of VAT and other applicable UAE taxes.</p>
                <p><strong>4.3</strong> Late payments may incur:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Interest at 1.5% per month or</li>
                    <li>Maximum permitted by UAE law, whichever is lower</li>
                </ul>
                <p className="mt-4"><strong>4.4</strong> AqionLabs may revise pricing upon renewal with prior written notice.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">5. DATA PROTECTION & SECURITY</h3>
                <p><strong>5.1</strong> AqionLabs shall implement appropriate technical and organizational measures in accordance with UAE PDPL to ensure data security, confidentiality, integrity, and availability.</p>
                <p><strong>5.2</strong> AqionLabs shall:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Process Personal Data only on documented instructions from the Customer</li>
                    <li>Ensure personnel are bound by confidentiality obligations</li>
                    <li>Maintain data segregation between customers</li>
                    <li>Notify Customer without undue delay in case of a data breach</li>
                </ul>
                <p className="mt-4"><strong>5.3 Data Hosting Locations:</strong> UAE and other approved jurisdictions with adequate data protection standards.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">6. CUSTOMER OBLIGATIONS</h3>
                <p>Customer represents and warrants that:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>It has lawful authority to collect and process Personal Data</li>
                    <li>It complies with all applicable UAE and international laws</li>
                    <li>It will not use the Services for unlawful, fraudulent, or abusive activities</li>
                    <li>It will not transmit spam, phishing, harassment, or illegal content</li>
                </ul>
                <p className="mt-4">Customer remains solely responsible for:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>The legality of communications sent via the Services</li>
                    <li>Compliance with telecom, marketing, and advertising regulations</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">7. AI-SPECIFIC PROVISIONS</h3>
                <p><strong>7.1</strong> The Services may include AI-powered automation systems.</p>
                <p><strong>7.2</strong> Customer acknowledges:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>AI outputs may contain inaccuracies</li>
                    <li>AI recommendations require human oversight</li>
                    <li>AqionLabs does not guarantee revenue results</li>
                </ul>
                <p className="mt-4"><strong>7.3</strong> Customer remains responsible for:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Final decisions made based on AI outputs</li>
                    <li>Compliance with regulated industry requirements</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">8. SUBPROCESSORS</h3>
                <p>AqionLabs may engage subprocessors provided that:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Subprocessors are contractually bound to equivalent data protection standards</li>
                    <li>AqionLabs remains responsible for subprocessors’ compliance</li>
                    <li>A list of subprocessors shall be made available upon request</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">9. CONFIDENTIALITY</h3>
                <p>Each party agrees to maintain confidentiality of:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Business information</li>
                    <li>Pricing</li>
                    <li>Technical architecture</li>
                    <li>Security measures</li>
                    <li>Trade secrets</li>
                </ul>
                <p className="mt-4">This obligation survives termination for five (5) years.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">10. WARRANTIES AND DISCLAIMERS</h3>
                <p><strong>10.1</strong> AqionLabs warrants that:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>It has authority to provide the Services</li>
                    <li>Services will be provided with reasonable skill and care</li>
                </ul>
                <p className="mt-4"><strong>10.2</strong> Except as expressly stated:</p>
                <p>Services are provided “as is” and “as available”.</p>
                <p>AqionLabs disclaims:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Implied warranties of merchantability</li>
                    <li>Fitness for a particular purpose</li>
                    <li>Uninterrupted or error-free operation</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">11. LIMITATION OF LIABILITY</h3>
                <p>To the maximum extent permitted by UAE law:</p>
                <p>AqionLabs shall not be liable for:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Indirect or consequential damages</li>
                    <li>Loss of profit or revenue</li>
                    <li>Loss of goodwill</li>
                </ul>
                <p className="mt-4">Total aggregate liability under this Agreement shall not exceed the total fees paid by Customer during the preceding twelve (12) months.</p>
                <p>This limitation does not apply to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Fraud</li>
                    <li>Willful misconduct</li>
                    <li>Gross negligence</li>
                    <li>Violations of applicable data protection law</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">12. INDEMNIFICATION</h3>
                <p>Customer agrees to indemnify AqionLabs against claims arising from:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Customer’s unlawful use of the Services</li>
                    <li>Violation of telecom, marketing, or data protection laws</li>
                    <li>Content transmitted via the Services</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">13. FORCE MAJEURE</h3>
                <p>Neither party shall be liable for failure to perform due to events beyond reasonable control including natural disasters, government acts, internet outages, or cyber incidents.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">14. GOVERNING LAW & DISPUTE RESOLUTION</h3>
                <p>This Agreement shall be governed by the laws of the United Arab Emirates.</p>
                <p>Any dispute shall be resolved by arbitration under the DIFC-LCIA Arbitration Rules.</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Seat of arbitration: Dubai, UAE</li>
                    <li>Language: English</li>
                    <li>Tribunal: One arbitrator</li>
                </ul>
                <p className="mt-4">The decision shall be final and binding.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">15. INTELLECTUAL PROPERTY</h3>
                <p>All intellectual property in the Services remains the exclusive property of AqionLabs.</p>
                <p>Customer may not:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Reverse engineer</li>
                    <li>Resell</li>
                    <li>Copy</li>
                    <li>Modify</li>
                    <li>Use trademarks without written consent</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">16. MODIFICATION OF TERMS</h3>
                <p>AqionLabs may update this Agreement. Updates will be effective upon posting. Continued use constitutes acceptance.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-4">17. ENTIRE AGREEMENT</h3>
                <p>This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements.</p>
            </section>

            <div className="border-t border-navy-800 pt-8 mt-12">
                <h3 className="text-xl font-bold text-white mb-4">CONTACT</h3>
                <p>For questions regarding this Agreement:</p>
                <p className="mt-4 font-semibold text-white">AqionLabs</p>
                <p>United Arab Emirates</p>
                <p>Support: <a href="mailto:contact@Aqionlabs.com" className="text-indigo-400 hover:underline">contact@Aqionlabs.com</a></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
