import SectionTitle from "@/components/section-title";

export default function CityConnectPrivacyPolicy() {
	return (
		<div className="px-5 lg:px-32 pt-40 pb-20">
			<SectionTitle title="Privacy Policy" />

			<div className="max-w-4xl mx-auto space-y-8 text-foreground-secondary">
				<div className="space-y-4">
					<h2 className="text-2xl font-semibold text-foreground">
						City Connect - Privacy Policy
					</h2>
					<p className="text-sm text-foreground-secondary">
						Last updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				<div className="space-y-6">
					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							1. Overview
						</h3>
						<p>
							City Connect is a community-driven platform that enables residents and
							local organizations to report and track city maintenance issues. This
							Privacy Policy explains how we collect, use, and protect your
							information when you use the App.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							2. Information We Collect
						</h3>
						<p>
							We collect information you provide when reporting an issue or creating
							an account, including:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>Account details such as name, email address, or phone number</li>
							<li>Issue descriptions, categories, and status updates</li>
							<li>Photos or media you upload to support a report</li>
							<li>Location data from manual entry or map selection</li>
						</ul>
						<p className="mt-3">
							We may also collect limited technical data such as device type,
							browser information, and usage patterns to improve App performance.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							3. How We Use Your Information
						</h3>
						<p>Your information is used to:</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>Create, manage, and display reported issues on the interactive map</li>
							<li>Notify relevant authorities or community groups about new reports</li>
							<li>Provide status updates and notifications on issue resolution</li>
							<li>Improve App features, performance, and user experience</li>
						</ul>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							4. Location Data
						</h3>
						<p>
							Location data is used to accurately place reports on the map. You can
							choose to provide your location manually, or allow the App to detect it
							via device services. Location data is tied to the specific report and is
							visible to other users and relevant authorities to facilitate resolution.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							5. Information Sharing
						</h3>
						<p>
							We share report details, including descriptions, media, and location,
							with municipal agencies, partner organizations, and other City Connect
							users to encourage community collaboration. We do not sell personal data
							to third parties.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							6. Third-Party Services
						</h3>
						<p>
							City Connect uses third-party services such as Google Maps for location
							and mapping functionality. These services may collect data as described
							in their own privacy policies. We encourage you to review Google&apos;s
							privacy policy for more details.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							7. Data Security
						</h3>
						<p>
							We implement reasonable security measures to protect your information,
							including encryption in transit and restricted access controls. However,
							no method of transmission or storage is completely secure, so we cannot
							guarantee absolute security.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							8. Your Choices and Rights
						</h3>
						<p>You can:</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>Update or delete your account information within the App</li>
							<li>Request removal of specific reports you created</li>
							<li>Control location sharing via your device settings</li>
							<li>Opt out of non-essential notifications in App preferences</li>
						</ul>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							9. Children&apos;s Privacy
						</h3>
						<p>
							City Connect is intended for users aged 13 and older. We do not
							knowingly collect personal information from children under 13. If we
							learn that we have collected such information, we will delete it
							promptly.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							10. Changes to This Policy
						</h3>
						<p>
							We may update this Privacy Policy to reflect new features or legal
							requirements. When changes are made, we will revise the &quot;Last
							updated&quot; date and notify users through the App or email when
							appropriate.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							11. Contact Us
						</h3>
						<p>
							If you have questions or concerns about this Privacy Policy or how your
							data is handled, please reach out to us at:
						</p>
						<div className="ml-4 space-y-1">
							<p>
								Email:{" "}
								<a
									href="mailto:faizashrafkk@gmail.com"
									className="text-primary hover:underline"
								>
									faizashrafkk@gmail.com
								</a>
							</p>
						</div>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							12. Summary
						</h3>
						<div className="bg-background-secondary p-4 rounded-lg">
							<p className="font-medium text-foreground mb-2">Key Points:</p>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>✅ Issue reports may include photos and location data</li>
								<li>✅ Shared information supports faster community resolutions</li>
								<li>✅ No sale of personal information to third parties</li>
								<li>✅ Google Maps powers location services</li>
								<li>✅ You control your account and notification preferences</li>
							</ul>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

