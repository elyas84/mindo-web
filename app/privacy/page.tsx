import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Draft privacy policy for the Mindo app. Legal entity, contact email, hosting region, and retention period still need to be confirmed.",
};

const missingBeforePublication = [
  "Legal entity name, country, and any address that must appear on this policy.",
  "Privacy contact email.",
  "Where the Mindo API and its database are hosted, including the country or region.",
  "Whether Cloudinary is enabled for the published app.",
  "How long account-deletion records and any backups are kept.",
  "Whether Mindo is intended for children, and the App Store age rating. The app does not ask for age.",
];

export default function PrivacyPolicy() {
  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-5 py-14">
      <article>
        <header>
          <p className="text-sm font-semibold tracking-widest text-brand">MINDO</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted">Draft, 22 November 2026</p>
        </header>

        <aside
          className="mt-8 rounded-2xl border border-brand/30 bg-brand-soft px-5 py-5"
          aria-label="Draft notice"
        >
          <h2 className="text-lg font-semibold">Not ready for the App Store</h2>
          <p className="mt-2 leading-7">
            This page describes only what the Mindo app and its API do in the
            current code, plus items that are still unknown. Do not submit this
            URL in App Store Connect until every item below is replaced with a
            confirmed statement.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
            {missingBeforePublication.map((item) => (
              <li key={item}>
                <strong className="font-semibold">Needs confirmation: </strong>
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <nav className="mt-10" aria-label="On this page">
          <h2 className="text-sm font-semibold tracking-wide text-muted">On this page</h2>
          <ul className="mt-3 space-y-2 leading-7">
            <li>
              <a className="underline underline-offset-4" href="#what-mindo-is">
                What Mindo is
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="#information">
                Information Mindo handles
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="#who-receives-it">
                Who else receives it
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="#how-long">
                How long it is kept
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="#deletion">
                Deleting your account
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="#children">
                Children
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-12 space-y-12 leading-7">
          <section aria-labelledby="what-mindo-is">
            <h2 id="what-mindo-is" className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              What Mindo is
            </h2>
            <p className="mt-4">
              Mindo is a mobile app for personal reminders, notes, and reminders
              shared with other people in a group. You need an account. The app
              sends your information to the Mindo API. The API stores it in a
              database. The phone does not connect to that database itself.
            </p>
            <p className="mt-4">
              <strong className="font-semibold">Needs confirmation: </strong>
              the legal name of the person or company that operates Mindo, and
              the country where that operator is established.
            </p>
          </section>

          <section aria-labelledby="information">
            <h2 id="information" className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              Information Mindo handles
            </h2>

            <h3 className="mt-6 text-lg font-semibold">Account</h3>
            <p className="mt-3">
              Sign-in is provided by Clerk. You can create an account with email
              and a password, or sign in with Google or Apple. Clerk processes
              the email address, name, and sign-in. The password is not copied
              into Mindo’s database.
            </p>
            <p className="mt-3">
              After sign-in, Mindo stores a profile with the Clerk user ID,
              email address, first name, last name, Clerk profile image address,
              and the time of the latest account sync. The sign-in session is
              kept in secure storage on the phone.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Reminders and notes</h3>
            <p className="mt-3">
              A reminder can include a title, an optional description, a date and
              time, a time zone, a daily or weekday repeat rule, alert choices,
              and which occurrences you have marked done. A note can include a
              title and text. Older checklist notes, if one already exists, can
              still be stored. New notes are text.
            </p>
            <p className="mt-3">
              This is the content you type so Mindo can show it and remind you.
              It is stored with your account.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Groups and invitations</h3>
            <p className="mt-3">
              A group has a name and an optional description. Membership records
              who belongs and whether they are an owner or a member. A shared
              reminder has a title, an optional description, a time, a time zone,
              alert choices, and a separate done state for each assigned person.
            </p>
            <p className="mt-3">
              An invitation stores the invited email address and a hash of the
              invitation token. The raw token is not stored. A pending invitation
              does not expire by age. People in the group can see the shared
              reminder and who has finished.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Profile photo</h3>
            <p className="mt-3">
              A profile photo is optional. The app asks for photo-library access
              only so you can choose a picture. It does not take a photo with the
              camera. The picture is limited to 5 MB. If Cloudinary is
              configured, the picture is uploaded there.
            </p>
            <p className="mt-3">
              <strong className="font-semibold">Needs confirmation: </strong>
              whether the published app has Cloudinary turned on.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Notifications</h3>
            <p className="mt-3">
              Notification permission is requested after you choose to allow it,
              not silently on every launch. Alerts before a reminder, and one
              follow-up a little later if it is still unfinished, are scheduled
              on that phone.
            </p>
            <p className="mt-3">
              If you allow notifications, the app registers an Expo push token
              and the platform, iOS or Android. The server uses that token to
              send an invitation alert, an alert that a shared reminder was
              assigned to you, and an alert to the creator when someone else
              marks a shared reminder done. An assignment or completion alert can
              include the reminder title. A completion alert can include the
              other person’s name. An invitation alert does not include the group
              name.
            </p>

            <h3 className="mt-6 text-lg font-semibold">On the phone</h3>
            <p className="mt-3">
              The phone keeps notification bookkeeping and your appearance
              choice: light, dark, or match the system. The appearance choice is
              stored only on the device and is not removed when you delete the
              account. Signing out removes that account’s local reminder alerts
              and the push token for that phone. It does not delete the account.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Not part of the app code</h3>
            <p className="mt-3">
              The app code does not include an advertising SDK or an analytics
              SDK. It does not ask for contacts, location, microphone, or camera
              access, and it does not read the device calendar. The date picker
              is only for choosing a reminder time. There is no payment or
              subscription flow.
            </p>
            <p className="mt-3">
              This is a statement about the app code. It is not yet a legal
              statement about sale of personal information, and it does not
              describe logs that Clerk, Expo, Apple, Google, or the database host
              may keep on their own.
            </p>
          </section>

          <section aria-labelledby="who-receives-it">
            <h2 id="who-receives-it" className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              Who else receives it
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>Clerk, for the account, session, and sign-in with email, Google, or Apple.</li>
              <li>
                The database behind the Mindo API, for the profile, reminders,
                notes, groups, invitations, and push tokens.
              </li>
              <li>Cloudinary, if you upload a profile photo and Cloudinary is configured.</li>
              <li>Expo’s push service, when a remote invitation, assignment, or completion alert is sent.</li>
              <li>Apple or Google, if you choose those sign-in methods.</li>
              <li>Other members of a group, for shared reminders and names shown in that group.</li>
            </ul>
            <p className="mt-4">
              <strong className="font-semibold">Needs confirmation: </strong>
              the hosting provider and country for the API and database, and the
              country where a profile photo is stored if Cloudinary is used.
            </p>
          </section>

          <section aria-labelledby="how-long">
            <h2 id="how-long" className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              How long it is kept
            </h2>
            <p className="mt-4">
              Reminders, notes, and group information stay until you delete that
              item, leave or delete the group, or delete your account. Completion
              history older than 48 hours can be removed from a reminder. The
              reminder itself is not deleted by that cleanup.
            </p>
            <p className="mt-4">
              After account deletion, the server can keep a deletion record with
              the Clerk user ID, an internal user ID, the deletion status, and
              error codes. That record does not include your email, name, or
              reminder text. The code does not delete this record.
            </p>
            <p className="mt-4">
              <strong className="font-semibold">Needs confirmation: </strong>
              how long the deletion record is kept, and whether backups exist and
              for how long. Those periods are not set in the app code.
            </p>
          </section>

          <section aria-labelledby="deletion">
            <h2 id="deletion" className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              Deleting your account
            </h2>
            <p className="mt-4">
              In the app, open Profile and choose Delete Account. Mindo asks you
              to confirm twice. Keep the app open until it finishes. If it is
              interrupted, Mindo can continue the deletion the next time you open
              the app.
            </p>
            <p className="mt-4">The deletion removes:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Your reminders, notes, and leftover unused to-do records.</li>
              <li>Your push tokens and uploaded profile photo, when a photo was stored.</li>
              <li>Your memberships, invitations addressed to your verified emails, and the groups you own.</li>
              <li>Shared reminders inside a group you own. That also removes them for the other members.</li>
              <li>Your Mindo profile and your Clerk account.</li>
            </ul>
            <p className="mt-4">
              Other people’s personal reminders and notes are not deleted. You
              cannot leave a group you own until you transfer ownership or delete
              the group. There is no separate website form for deletion. It is
              done in the app.
            </p>
          </section>

          <section aria-labelledby="children">
            <h2 id="children" className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              Children
            </h2>
            <p className="mt-4">
              The app does not ask for a date of birth and does not have a
              separate child account or parental-consent flow.
            </p>
            <p className="mt-4">
              <strong className="font-semibold">Needs confirmation: </strong>
              whether children are an intended audience, and the age rating you
              will use on the App Store. This draft does not claim that Mindo is,
              or is not, directed to children.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2 id="contact" className="scroll-mt-24 text-2xl font-semibold tracking-tight">
              Contact
            </h2>
            <p className="mt-4">
              <strong className="font-semibold">Needs confirmation: </strong>
              the email address people should use for privacy questions. No
              support or privacy address is set in the app.
            </p>
            <p className="mt-4">
              This policy will be updated when those confirmed details replace
              the draft notes. The date at the top will change with that update.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
