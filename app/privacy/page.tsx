import type { Metadata } from "next";

/**
 * TODO (do not publish these as facts until the developer confirms them):
 * - The proprietor's personal name and postal address were not provided.
 *   Do not add either.
 * - Storage countries for MongoDB, Clerk, Cloudinary, and Expo are not confirmed.
 * - No specific retention period is confirmed for deletion records or backups.
 * - No date-of-birth check or parental-approval flow is implemented.
 *   Do not claim that either exists.
 * - Encryption in transit or at rest was not verified. Do not claim it.
 */

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Mindo handles account details, reminders, notes, Shared Spaces, profile pictures, and notifications.",
};

const linkClass =
  "underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

const headingClass = "scroll-mt-24 text-2xl font-semibold tracking-tight";

const sections = [
  ["introduction", "Introduction"],
  ["controller", "Who is responsible for your personal data?"],
  ["information-we-collect", "Information we collect"],
  ["how-we-use", "How we use personal information"],
  ["account", "Account registration and authentication"],
  ["reminders-notes-spaces", "Reminders, notes, and Shared Spaces"],
  ["photos", "Profile pictures and photo library access"],
  ["notifications", "Notifications"],
  ["service-providers", "Third-party services and service providers"],
  ["storage-security", "Data storage and security"],
  ["retention-deletion", "Data retention and account deletion"],
  ["international", "International data processing and transfers"],
  ["your-rights", "Your privacy rights"],
  ["gdpr", "GDPR-related rights"],
  ["children", "Children’s privacy"],
  ["changes", "Changes to this Privacy Policy"],
  ["contact", "Contact information"],
] as const;

export default function PrivacyPolicy() {
  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-5 py-14">
      <article>
        <header>
          <p className="text-sm font-semibold tracking-widest text-brand">MINDO</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted">Last updated 22 November 2026</p>
        </header>

        <nav className="mt-10" aria-label="On this page">
          <h2 className="text-sm font-semibold tracking-wide text-muted">On this page</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
            {sections.map(([id, label]) => (
              <li key={id}>
                <a className={linkClass} href={`#${id}`}>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-12 leading-7">
          <section aria-labelledby="introduction">
            <h2 id="introduction" className={headingClass}>
              Introduction
            </h2>
            <p className="mt-4">
              This policy explains how Mindo handles personal information. Mindo
              is a mobile app for personal reminders, notes, and Shared Spaces.
            </p>
          </section>

          <section aria-labelledby="controller">
            <h2 id="controller" className={headingClass}>
              Who is responsible for your personal data?
            </h2>
            <p className="mt-4">
              Mindo is operated by{" "}
              <strong className="font-semibold">Elyas Digital Solutions</strong>, a
              registered sole proprietorship (enskild firma) in Sweden.
            </p>
            <p className="mt-4">
              The data controller responsible for processing your personal data
              through Mindo is the individual proprietor of Elyas Digital
              Solutions.
            </p>
            <p className="mt-4">
              For privacy-related questions or requests, you can contact:
            </p>
            <p className="mt-4">
              <strong className="font-semibold">Email:</strong>{" "}
              <a className={linkClass} href="mailto:elyasdigitalsolutions@gmail.com">
                elyasdigitalsolutions@gmail.com
              </a>
            </p>
            <p className="mt-4">This policy does not publish a postal address.</p>
          </section>

          <section aria-labelledby="information-we-collect">
            <h2 id="information-we-collect" className={headingClass}>
              Information we collect
            </h2>
            <p className="mt-4">
              Mindo collects the information you provide and the information
              needed to run the features below. It does not collect GPS
              coordinates or track your physical location.
            </p>
            <h3 className="mt-6 text-lg font-semibold">Account and profile</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>First name, last name, and email address.</li>
              <li>A password, when you register with email. Email verification is required.</li>
              <li>The sign-in method, including Google or Apple if you choose one of those.</li>
              <li>Clerk user ID, Clerk profile image URL, and account creation, update, and last-seen times.</li>
              <li>An optional profile picture, stored with its Cloudinary identifier and address.</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold">Content you add</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Personal reminders, including title, optional description, date and time, repeat settings, notification settings, and completion information.</li>
              <li>Notes, including title, text, and, for a checklist, its items and whether each item is done.</li>
              <li>Shared Spaces, including the name, optional description, membership, roles, permissions, invitations, shared reminders, and assignments.</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold">Device information used by the app</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>An IANA time-zone identifier, so a reminder can be scheduled in the right local time. This is not GPS location.</li>
              <li>An Expo push token and the platform, iOS or Android, if you allow remote notifications.</li>
              <li>A session token kept on the device, and a local cache of personal reminders.</li>
            </ul>
          </section>

          <section aria-labelledby="how-we-use">
            <h2 id="how-we-use" className={headingClass}>
              How we use personal information
            </h2>
            <p className="mt-4">Mindo uses this information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Create your account, sign you in, and keep the session on your device.</li>
              <li>Store and show your reminders and notes, including reminders cached on the device.</li>
              <li>Schedule personal reminder notifications on that device.</li>
              <li>Run Shared Spaces, invitations, assignments, and completion updates.</li>
              <li>Show your first name, last name, and profile image to other members of a Shared Space you belong to.</li>
              <li>Send the remote notifications described below, when you have allowed them.</li>
              <li>Record the last time your account synced, and delete the account when you ask for that in the app.</li>
            </ul>
            <p className="mt-4">
              The app code does not include an analytics SDK or an advertising
              SDK. That does not mean Clerk, MongoDB, Cloudinary, Expo, Apple, or
              Google never process technical or operational logs of their own.
            </p>
          </section>

          <section aria-labelledby="account">
            <h2 id="account" className={headingClass}>
              Account registration and authentication
            </h2>
            <p className="mt-4">
              Mindo uses Clerk for registration, sign-in, email verification, and
              password management. You can register with an email address and
              password, or sign in with Google or Apple.
            </p>
            <p className="mt-4">
              Email registration asks for your first name, last name, email
              address, and password. You must verify the email address. The
              password is managed by Clerk and is not stored in Mindo’s MongoDB
              database.
            </p>
            <p className="mt-4">
              After sign-in, the app stores the session token with Expo
              SecureStore. On iOS that uses the Keychain. On Android that uses
              the Keystore. Mindo’s database stores the Clerk user ID, email
              address, first name, last name, Clerk profile image URL, optional
              profile-picture details, and the account timestamps described
              above.
            </p>
          </section>

          <section aria-labelledby="reminders-notes-spaces">
            <h2 id="reminders-notes-spaces" className={headingClass}>
              Reminders, notes, and Shared Spaces
            </h2>
            <p className="mt-4">
              Personal reminders, notes, and Shared Spaces are stored online in
              MongoDB. Personal reminders are also cached on the device.
            </p>
            <p className="mt-4">
              A Shared Space stores its name, an optional description, who
              belongs, each member’s role and permissions, invitations, shared
              reminders, and assignments. Members of a Shared Space can see other
              members’ first names, last names, and profile images, and they can
              see the shared reminders in that space.
            </p>
            <p className="mt-4">
              A reminder stores the time zone needed to interpret its schedule.
              That identifier is used for scheduling. It is not a record of where
              you are.
            </p>
          </section>

          <section aria-labelledby="photos">
            <h2 id="photos" className={headingClass}>
              Profile pictures and photo library access
            </h2>
            <p className="mt-4">
              You can choose a profile picture from your photo library. The app
              asks for photo-library access for that purpose. Mindo does not
              offer video uploads or general document and file uploads.
            </p>
            <p className="mt-4">
              If you add a picture, it is stored by Cloudinary. Mindo keeps the
              picture’s address and Cloudinary public ID with your profile.
              Choosing a picture is optional.
            </p>
          </section>

          <section aria-labelledby="notifications">
            <h2 id="notifications" className={headingClass}>
              Notifications
            </h2>
            <p className="mt-4">
              Notifications for your personal reminders are scheduled on the
              device. They use the reminder details stored for your account and
              the local cache.
            </p>
            <p className="mt-4">
              Remote notifications are sent through the Expo Push Notification
              Service for new Shared Space invitations, shared-reminder
              assignments, and shared-reminder completions. To send those, the
              database stores an Expo push token and whether the device is iOS or
              Android.
            </p>
            <p className="mt-4">
              A shared-reminder notification can include the reminder title and a
              member’s display name. An invitation notification tells you that
              you have been invited.
            </p>
          </section>

          <section aria-labelledby="service-providers">
            <h2 id="service-providers" className={headingClass}>
              Third-party services and service providers
            </h2>
            <p className="mt-4">
              Mindo uses other services to operate the app. Information is
              handled by those services for the purposes below.
            </p>
            <ul className="mt-3 list-disc space-y-3 pl-5">
              <li>
                <strong className="font-semibold">Clerk.</strong> Registration,
                sign-in, email verification, and password management.
              </li>
              <li>
                <strong className="font-semibold">MongoDB.</strong> Storage of
                account profiles, reminders, notes, Shared Spaces, invitations,
                and related application records.
              </li>
              <li>
                <strong className="font-semibold">Cloudinary.</strong> Storage of
                optional profile pictures.
              </li>
              <li>
                <strong className="font-semibold">Expo Push Notification Service.</strong>{" "}
                Delivery of remote notifications for invitations, assignments, and
                completions.
              </li>
              <li>
                <strong className="font-semibold">Google and Apple.</strong> Used
                when you choose those sign-in options.
              </li>
            </ul>
            <p className="mt-4">
              Other members of a Shared Space also receive the shared content and
              the member names and profile images described above. This policy
              does not state which country each provider uses for storage.
            </p>
          </section>

          <section aria-labelledby="storage-security">
            <h2 id="storage-security" className={headingClass}>
              Data storage and security
            </h2>
            <p className="mt-4">
              Account profiles, reminders, notes, Shared Spaces, invitations, and
              related records are stored in MongoDB. Optional profile pictures
              are stored by Cloudinary. The session token stays on the device in
              SecureStore. Passwords stay with Clerk and are not copied into the
              Mindo database.
            </p>
            <p className="mt-4">
              This policy does not claim that every copy of your information is
              encrypted, and it does not claim a security certification. Access
              to your Mindo content requires your signed-in account. Shared Space
              content is also available to the other members of that space.
            </p>
          </section>

          <section aria-labelledby="retention-deletion">
            <h2 id="retention-deletion" className={headingClass}>
              Data retention and account deletion
            </h2>
            <p className="mt-4">
              Mindo keeps your profile, reminders, notes, and Shared Space
              information while your account and that content exist. This policy
              does not state a fixed number of days for how long each record is
              kept.
            </p>
            <p className="mt-4">
              You can request account deletion in the app. The deletion process
              removes your Clerk account and most associated application data,
              including your profile, personal reminders, notes, uploaded profile
              picture, push tokens, Shared Spaces you own and their related data,
              and relevant invitations.
            </p>
            <p className="mt-4">
              Deletion does not promise immediate or absolute erasure of every
              record. Some limited records may remain. Those can include
              account-deletion operation records, and shared-reminder history or
              assignment records that are still associated with other users.
              Information may also remain where it is needed to keep a Shared
              Space working for the people who are still in it, to preserve
              another person’s records, or to finish the deletion process.
            </p>
            <p className="mt-4">
              Signing out removes the session on that device. It does not delete
              the account. There is no separate deletion form on this website.
            </p>
          </section>

          <section aria-labelledby="international">
            <h2 id="international" className={headingClass}>
              International data processing and transfers
            </h2>
            <p className="mt-4">
              Mindo uses Clerk, MongoDB, Cloudinary, and the Expo Push
              Notification Service. Google or Apple also process sign-in
              information if you choose them. Those providers may process
              information in countries other than your own.
            </p>
            <p className="mt-4">
              This policy does not name those countries. A storage location is
              included here only when it has been confirmed, and none has been
              confirmed for this policy.
            </p>
          </section>

          <section aria-labelledby="your-rights">
            <h2 id="your-rights" className={headingClass}>
              Your privacy rights
            </h2>
            <p className="mt-4">
              You can view and change your reminders, notes, and profile details
              in the app. You can delete the account from Profile. Account
              deletion removes an uploaded profile picture.
            </p>
            <p className="mt-4">
              You can also email{" "}
              <a className={linkClass} href="mailto:elyasdigitalsolutions@gmail.com">
                elyasdigitalsolutions@gmail.com
              </a>{" "}
              to ask about the personal information Mindo holds, to ask for a
              correction, or to ask for deletion. Some shared records may remain,
              as described above.
            </p>
          </section>

          <section aria-labelledby="gdpr">
            <h2 id="gdpr" className={headingClass}>
              GDPR-related rights
            </h2>
            <p className="mt-4">
              Where the GDPR applies, you may have the right to access your
              personal information, correct it, erase it, restrict processing,
              object to processing, and receive certain information in a portable
              form. Where processing is based on consent, you may withdraw that
              consent. Withdrawing consent does not affect processing that
              already happened.
            </p>
            <p className="mt-4">
              You may also lodge a complaint with a data protection supervisory
              authority. In Sweden, that authority is Integritetsskyddsmyndigheten
              (IMY).
            </p>
            <p className="mt-4">
              To use these rights with Mindo, email{" "}
              <a className={linkClass} href="mailto:elyasdigitalsolutions@gmail.com">
                elyasdigitalsolutions@gmail.com
              </a>
              . You can also delete the account in the app. This section
              describes rights where the law applies. It does not state that
              every person in every country has each of these rights.
            </p>
          </section>

          <section aria-labelledby="children">
            <h2 id="children" className={headingClass}>
              Children’s privacy
            </h2>
            <p className="mt-4">
              Mindo is designed to be a simple reminder app for everyday life and
              is intended for people of all ages who are able to understand and
              use its features.
            </p>
            <p className="mt-4">
              Mindo does not currently ask users to provide their date of birth
              or offer separate child accounts.
            </p>
            <p className="mt-4">
              We aim to handle everyone’s personal information responsibly,
              including information relating to children. If you are a parent or
              guardian and have questions about a child’s use of Mindo or their
              personal information, please contact us at{" "}
              <a className={linkClass} href="mailto:elyasdigitalsolutions@gmail.com">
                elyasdigitalsolutions@gmail.com
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="changes">
            <h2 id="changes" className={headingClass}>
              Changes to this Privacy Policy
            </h2>
            <p className="mt-4">
              This policy can be updated by publishing a new version at this
              page. The date at the top will change when that happens. The
              current version is the one shown on{" "}
              <a className={linkClass} href="https://mindo-web-coral.vercel.app/privacy">
                mindo-web-coral.vercel.app/privacy
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2 id="contact" className={headingClass}>
              Contact information
            </h2>
            <p className="mt-4">
              Mindo is operated by Elyas Digital Solutions, a registered sole
              proprietorship (enskild firma) in Sweden. The data controller is
              the individual proprietor of Elyas Digital Solutions. For privacy
              questions, email{" "}
              <a className={linkClass} href="mailto:elyasdigitalsolutions@gmail.com">
                elyasdigitalsolutions@gmail.com
              </a>
              . This policy does not publish a postal address.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
