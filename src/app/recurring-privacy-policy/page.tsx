import SectionTitle from "@/components/section-title";

export default function PrivacyPolicy() {
	return (
		<div className="px-5 lg:px-32 pt-40 pb-20">
			<SectionTitle title="Privacy Policy" />

			<div className="max-w-4xl mx-auto space-y-8 text-foreground-secondary">
				<div className="space-y-4">
					<h2 className="text-2xl font-semibold text-foreground">
						Recurring Slip Manager - Privacy Policy
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
							This Privacy Policy describes how the Recurring Slip Manager
							application handles information. The App is designed to work
							entirely offline with local data storage, ensuring your
							privacy and data security.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							2. Data Collection
						</h3>
						<p>
							<strong>
								We do not collect, store, or transmit any personal data.
							</strong>{" "}
							The Recurring Slip Manager operates entirely on your local
							device and does not require internet connectivity for core
							functionality.
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>No user accounts or login systems</li>
							<li>No data transmission to external servers</li>
							<li>No analytics or tracking</li>
							<li>No personal information collection</li>
						</ul>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							3. Local Data Storage
						</h3>
						<p>
							All data is stored locally on your device using a local SQL
							database. This includes:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>Recurring slip information</li>
							<li>Payment schedules and reminders</li>
							<li>User preferences and settings</li>
							<li>Any other data you choose to input</li>
						</ul>
						<p>
							This data remains on your device and is not accessible to us
							or any third parties.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							4. Data Security
						</h3>
						<p>
							Since all data is stored locally on your device, the security
							of your information depends on your device&apos;s security
							measures. We recommend:
						</p>
						<ul className="list-disc list-inside space-y-2 ml-4">
							<li>Keeping your device&apos;s operating system updated</li>
							<li>Using device lock screens and authentication</li>
							<li>Regularly backing up your device data</li>
							<li>Being cautious about sharing your device with others</li>
						</ul>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							5. Third-Party Services
						</h3>
						<p>
							The App does not integrate with any third-party services that
							would collect or transmit your data. All functionality is
							self-contained within the application.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							6. Data Deletion
						</h3>
						<p>
							You can delete all data associated with the App by
							uninstalling the application from your device. Since all data
							is stored locally, uninstalling the App will permanently
							remove all your data.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							7. Children&apos;s Privacy
						</h3>
						<p>
							The App does not collect any personal information from anyone,
							including children under 13. Since no data is collected or
							transmitted, there are no special considerations for
							children&apos;s privacy.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							8. Changes to This Policy
						</h3>
						<p>
							We may update this Privacy Policy from time to time. Any
							changes will be posted on this page with an updated revision
							date. Since the App doesn&apos;t collect data, changes to this
							policy will not affect your existing data.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							9. Contact Information
						</h3>
						<p>
							If you have any questions about this Privacy Policy or the
							Recurring Slip Manager App, please contact us at:
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
							10. Summary
						</h3>
						<div className="bg-background-secondary p-4 rounded-lg">
							<p className="font-medium text-foreground mb-2">
								Key Points:
							</p>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>✅ No data collection or transmission</li>
								<li>✅ All data stored locally on your device</li>
								<li>✅ No user accounts or login required</li>
								<li>✅ No third-party integrations</li>
								<li>✅ Complete privacy and data control</li>
							</ul>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
