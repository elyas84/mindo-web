import Image from "next/image";
import Link from "next/link";

import { ScreenGallery } from "@/components/screen-gallery";

const screens = [
  {
    src: "/screens/home.png",
    title: "Home",
    alt: "Mindo home screen with a greeting, a shared spaces card, and upcoming reminders for watering the plants and a team meeting.",
    caption: "What is coming up, in one place.",
  },
  {
    src: "/screens/reminders.png",
    title: "Reminders",
    alt: "Mindo reminders screen with nothing scheduled today and two upcoming reminders.",
    caption: "Today, upcoming, and still there after the time passes.",
  },
  {
    src: "/screens/shared-reminder.png",
    title: "Shared reminder",
    alt: "Mindo shared reminder with a date, 67 percent progress, two of three people completed, and three people listed.",
    caption: "Each person has their own done state.",
  },
  {
    src: "/screens/create-space.png",
    title: "Create a group",
    alt: "Mindo screen titled Create a space, with a required name field, an optional description, and a create button.",
    caption: "A name, and a description if you want one.",
  },
  {
    src: "/screens/notes.png",
    title: "Notes",
    alt: "Mindo notes screen with two saved notes: a weekend shopping list and ideas for the weekend.",
    caption: "Notes you can open again later.",
  },
] as const;

export default function Home() {
  return (
    <main id="content">
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-brand-soft"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 size-64 rounded-full bg-brand-soft"
        />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[minmax(0,1fr)_18rem] md:py-20">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest text-brand">MINDO</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              A calmer day starts here
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              Tell Mindo what you need to remember. It helps you remember it at
              the right time, keeps a note when you want one, and lets you share
              a reminder with other people.
            </p>
            <div className="mt-8">
              <p className="inline-flex rounded-full bg-brand px-5 py-3 text-sm font-medium text-white">
                Coming to the App Store
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                The listing is not live yet, so this is not a download link.
              </p>
            </div>
          </div>
          <Image
            src="/screens/home.png"
            alt={screens[0].alt}
            width={471}
            height={1024}
            priority
            sizes="(min-width: 768px) 20rem, 100vw"
            className="mx-auto h-auto w-full max-w-xs"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8" aria-labelledby="keeps-heading">
        <h2 id="keeps-heading" className="text-3xl font-semibold tracking-tight">
          What Mindo keeps for you
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          <li className="rounded-2xl border border-line bg-white px-5 py-5">
            <h3 className="text-lg font-semibold">Reminders that stay</h3>
            <p className="mt-2 leading-7 text-muted">
              Choose a time. Repeat it daily or on weekdays if you want. It
              stays until you mark it done, including after the time has passed.
              If it is still unfinished, Mindo can notify you once more a little
              later.
            </p>
          </li>
          <li className="rounded-2xl border border-line bg-white px-5 py-5">
            <h3 className="text-lg font-semibold">Notes</h3>
            <p className="mt-2 leading-7 text-muted">
              Save something you want to find later. A shopping list, a thought,
              a few lines. It stays with your account.
            </p>
          </li>
          <li className="rounded-2xl border border-line bg-white px-5 py-5">
            <h3 className="text-lg font-semibold">Shared reminders</h3>
            <p className="mt-2 leading-7 text-muted">
              Invite someone by email into a group. A shared reminder shows who
              has finished, and each person marks their own part done.
            </p>
          </li>
          <li className="rounded-2xl border border-line bg-white px-5 py-5">
            <h3 className="text-lg font-semibold">Your account</h3>
            <p className="mt-2 leading-7 text-muted">
              Sign in with email, Google, or Apple. You can delete the account
              from Profile.{" "}
              <Link
                href="/privacy"
                className="text-ink underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Read the privacy policy
              </Link>
              .
            </p>
          </li>
        </ul>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16" aria-labelledby="screens-heading">
        <h2 id="screens-heading" className="text-3xl font-semibold tracking-tight">
          A look at the app
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted">
          These are the screens prepared for Mindo. In the app, shared reminders
          live in Groups.
        </p>
        <ScreenGallery screens={screens} />
      </section>
    </main>
  );
}
