
import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-950 min-h-screen text-white pt-32 pb-20 font-sans relative">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">AQIONLABS</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">PRIVACY POLICY</h2>
        <p className="text-slate-400 mb-8"><strong>Last Updated:</strong> 2/12/2026</p>
        
        <div className="prose prose-lg prose-invert text-slate-400 max-w-none space-y-8">
            {/* 1. Introduction */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">1. Introduction</h3>
                <p>AqionLabs FZ-LLC (“AqionLabs”, “we”, “us”, “our”) respects your privacy and is committed to protecting your personal data in accordance with the laws of the United Arab Emirates.</p>
                <p>This Privacy Policy explains how we collect, use, disclose, and safeguard personal data when you:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Visit our website</li>
                    <li>Use our AI platforms, cloud software, or contact center solutions</li>
                    <li>Communicate with us</li>
                    <li>Subscribe to our services</li>
                </ul>
                <p className="mt-4">By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy.</p>
                <p>If you do not agree with this Policy, you should discontinue use of our services.</p>
            </section>

            {/* 2. Legal Framework */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">2. Legal Framework</h3>
                <p>This Privacy Policy is governed by:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>UAE Federal Decree-Law No. 45 of 2021 (Personal Data Protection Law – PDPL)</li>
                    <li>Applicable UAE federal and emirate-level regulations</li>
                    <li>DIFC/ADGM data protection rules where relevant</li>
                    <li>Other applicable international laws where required</li>
                </ul>
                <p className="mt-4">AqionLabs may act as:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>Data Controller</strong> (when we determine how and why personal data is processed), or</li>
                    <li><strong>Data Processor</strong> (when we process data on behalf of customers using our platforms).</li>
                </ul>
            </section>

            {/* 3. Personal Data We Collect */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">3. Personal Data We Collect</h3>
                <p>We may collect and process the following categories of personal data:</p>
                
                <div className="ml-4 mt-4 space-y-4">
                    <div>
                        <strong className="text-white block mb-2">3.1 Usage Data</strong>
                        <p>Information about how you interact with our website or services, including:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device information</li>
                            <li>Operating system</li>
                            <li>Pages visited</li>
                            <li>Time spent on pages</li>
                            <li>Clickstream data</li>
                            <li>Geographic region (approximate)</li>
                        </ul>
                        <p className="mt-2 text-sm italic">This data helps us improve system performance and user experience.</p>
                    </div>

                    <div>
                        <strong className="text-white block mb-2">3.2 Account Information</strong>
                        <p>When you register or use our services:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Company details</li>
                            <li>Login credentials</li>
                            <li>Contact details</li>
                        </ul>
                    </div>

                    <div>
                        <strong className="text-white block mb-2">3.3 Transaction Information</strong>
                        <p>If you purchase services:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Billing details</li>
                            <li>Payment records</li>
                            <li>Transaction history</li>
                        </ul>
                        <p className="mt-2 text-sm italic">Payment information is processed securely through authorized payment providers.</p>
                    </div>

                    <div>
                        <strong className="text-white block mb-2">3.4 Communication Data</strong>
                        <p>Information you provide when:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Contacting support</li>
                            <li>Submitting inquiries</li>
                            <li>Participating in surveys</li>
                            <li>Sending emails or messages</li>
                        </ul>
                    </div>

                    <div>
                        <strong className="text-white block mb-2">3.5 Marketing & Subscription Data</strong>
                        <p>If you subscribe to newsletters or updates:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Email address</li>
                            <li>Preferences</li>
                            <li>Engagement metrics</li>
                        </ul>
                    </div>

                    <div>
                        <strong className="text-white block mb-2">3.6 AI Interaction Data</strong>
                        <p>Where applicable, we may process:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Call recordings</li>
                            <li>Chat transcripts</li>
                            <li>Voice AI interactions</li>
                            <li>WhatsApp conversation logs</li>
                        </ul>
                        <p className="mt-2 text-sm italic">This data is processed only in accordance with customer instructions and legal obligations.</p>
                    </div>
                </div>
            </section>

            {/* 4. Legal Basis for Processing */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">4. Legal Basis for Processing</h3>
                <p>We process personal data based on:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Your consent</li>
                    <li>Performance of a contract</li>
                    <li>Compliance with legal obligations</li>
                    <li>Legitimate business interests</li>
                    <li>Protection of legal rights</li>
                </ul>
                <p className="mt-4">Where consent is required under UAE PDPL, you may withdraw it at any time.</p>
            </section>

            {/* 5. How We Use Personal Data */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">5. How We Use Personal Data</h3>
                <p>We use personal data to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Provide and maintain our services</li>
                    <li>Improve AI models and platform performance</li>
                    <li>Process transactions</li>
                    <li>Communicate with customers</li>
                    <li>Provide customer support</li>
                    <li>Send service announcements</li>
                    <li>Prevent fraud and misuse</li>
                    <li>Comply with regulatory requirements</li>
                </ul>
                <p className="mt-4 font-semibold text-white">We do not sell personal data.</p>
            </section>

            {/* 6. Sharing of Personal Data */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">6. Sharing of Personal Data</h3>
                <p>We may share personal data with:</p>
                <div className="ml-4 mt-4 space-y-4">
                     <div>
                        <strong className="text-white block mb-2">6.1 Affiliates</strong>
                        <p>Companies within the AqionLabs group where necessary for operational purposes.</p>
                    </div>
                    <div>
                        <strong className="text-white block mb-2">6.2 Service Providers</strong>
                        <p>Third parties assisting with:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Payment processing</li>
                            <li>Cloud hosting</li>
                            <li>Analytics</li>
                            <li>Infrastructure support</li>
                        </ul>
                        <p className="mt-2 text-sm italic">These providers are contractually obligated to protect personal data.</p>
                    </div>
                    <div>
                        <strong className="text-white block mb-2">6.3 Legal Authorities</strong>
                        <p>Where disclosure is required by law, court order, or regulatory request.</p>
                    </div>
                </div>
            </section>

            {/* 7. International Transfers */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">7. International Transfers</h3>
                <p>If personal data is transferred outside the UAE, AqionLabs ensures:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>The receiving jurisdiction provides adequate protection; or</li>
                    <li>Appropriate contractual safeguards are implemented.</li>
                </ul>
            </section>

            {/* 8. Cookies & Tracking Technologies */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">8. Cookies & Tracking Technologies</h3>
                <div className="ml-4 mt-4 space-y-4">
                    <div>
                        <strong className="text-white block mb-2">8.1 What Are Cookies?</strong>
                        <p>Cookies are small text files placed on your device to improve website functionality and analytics.</p>
                    </div>
                    <div>
                        <strong className="text-white block mb-2">8.2 How We Use Cookies</strong>
                        <p>We may use:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Essential cookies (required for functionality)</li>
                            <li>Analytics cookies (e.g., Google Analytics)</li>
                            <li>Performance cookies</li>
                        </ul>
                        <p className="mt-4">You may control cookies through your browser settings.</p>
                        <p>Disabling cookies may impact website functionality.</p>
                    </div>
                </div>
            </section>

            {/* 9. Analytics */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">9. Analytics</h3>
                <p>We use analytics tools to understand:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Feature usage</li>
                    <li>Website performance</li>
                    <li>User engagement</li>
                </ul>
                <p className="mt-4">Analytics data is aggregated and used solely for service improvement.</p>
                <p>We do not share identifiable analytics data with third parties unless legally required.</p>
            </section>

            {/* 10. Data Retention */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">10. Data Retention</h3>
                <p>We retain personal data only for as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Fulfill contractual obligations</li>
                    <li>Comply with legal requirements</li>
                    <li>Resolve disputes</li>
                    <li>Protect legal rights</li>
                </ul>
                <p className="mt-4">When data is no longer required, it is securely deleted or anonymized.</p>
            </section>

            {/* 11. Your Rights Under UAE PDPL */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">11. Your Rights Under UAE PDPL</h3>
                <p>Under applicable UAE data protection laws, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Access your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion (subject to legal obligations)</li>
                    <li>Restrict processing</li>
                    <li>Object to processing</li>
                    <li>Request data portability</li>
                    <li>Withdraw consent</li>
                    <li>File a complaint with the UAE Data Office</li>
                </ul>
                <p className="mt-4">To exercise your rights, contact us at the email below.</p>
            </section>

            {/* 12. Children’s Privacy */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">12. Children’s Privacy</h3>
                <p>Our services are not intended for individuals under 18 years of age.</p>
                <p>We do not knowingly collect personal data from minors. If such data is identified, we will delete it promptly.</p>
            </section>

            {/* 13. Security Measures */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">13. Security Measures</h3>
                <p>AqionLabs implements appropriate technical and organizational safeguards to protect personal data against:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Unauthorized access</li>
                    <li>Accidental loss</li>
                    <li>Misuse</li>
                    <li>Alteration</li>
                    <li>Disclosure</li>
                </ul>
                <p className="mt-4">Security measures include encryption, access controls, and monitoring systems.</p>
            </section>

            {/* 14. AI-Specific Privacy Notice */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">14. AI-Specific Privacy Notice</h3>
                <p>Where AI systems are used:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Automated decision-making may occur</li>
                    <li>AI outputs may be based on patterns and data inputs</li>
                    <li>Human oversight may be required for regulated decisions</li>
                </ul>
                <p className="mt-4">Customers remain responsible for ensuring lawful use of AI outputs.</p>
            </section>

            {/* 15. Updates to This Privacy Policy */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4">15. Updates to This Privacy Policy</h3>
                <p>We may revise this Privacy Policy periodically.</p>
                <p>Changes will be published on our website and become effective upon posting.</p>
                <p>Continued use of the Services constitutes acceptance of the updated Policy.</p>
            </section>

            {/* 16. Contact Us */}
            <div className="border-t border-navy-800 pt-8 mt-12">
                <h3 className="text-xl font-bold text-white mb-4">16. Contact Us</h3>
                <p>If you have questions about this Privacy Policy or your personal data:</p>
                <p className="mt-4 font-semibold text-white">AqionLabs</p>
                <p>United Arab Emirates</p>
                <p>Support: <a href="mailto:contact@Aqionlabs.com" className="text-indigo-400 hover:underline">contact@Aqionlabs.com</a></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
