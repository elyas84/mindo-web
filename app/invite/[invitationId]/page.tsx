import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

/**
 * Public App Store listing. Leave this null until the listing URL exists.
 * Do not point it at a guessed apps.apple.com address.
 */
const APP_STORE_URL: string | null = null;

const INVITATION_ID_PATTERN = /^[A-Za-z0-9_-]+$/;
const INVITATION_ID_MAX_LENGTH = 128;
const INVITATION_TOKEN_MAX_LENGTH = 512;

export const metadata: Metadata = {
  title: "Invitation",
  description: "You have received an invitation to Mindo.",
  robots: { index: false, follow: false },
};

type InvitationPageProps = {
  params: Promise<{ invitationId: string }>;
  searchParams: Promise<{ token?: string | string[] }>;
};

export default function InvitationPage({ params, searchParams }: InvitationPageProps) {
  return (
    <main id="content" className="mx-auto w-full max-w-xl px-5 py-16">
      <p className="text-sm font-semibold tracking-widest text-brand">MINDO</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">You have an invitation</h1>
      <p className="mt-4 text-lg leading-8 text-muted">
        Someone invited you to Mindo. You review that invitation in the app. This
        page does not accept it.
      </p>
      <Suspense fallback={<p className="mt-8 text-sm text-muted">Preparing this invitation.</p>}>
        <InvitationActions params={params} searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function InvitationActions({ params, searchParams }: InvitationPageProps) {
  const [{ invitationId }, query, headerList] = await Promise.all([
    params,
    searchParams,
    headers(),
  ]);
  const invitation = invitationLink(invitationId, query.token);
  const platform = platformFrom(headerList.get("user-agent") ?? "");

  if (!invitation) {
    return (
      <div className="mt-8">
        <p className="leading-7">
          This invitation link is incomplete or damaged. Ask the person who
          invited you to send a new one.
        </p>
        <p className="mt-6">
          <Link href="/" className={textLinkClass}>
            Visit the Mindo website
          </Link>
        </p>
      </div>
    );
  }

  if (platform === "android") {
    return (
      <div className="mt-8">
        <p className="leading-7">
          The Android app is not available yet. Keep this page, or open the same
          link on an iPhone when you are ready to review the invitation.
        </p>
        <p className="mt-6">
          <Link href="/" className={textLinkClass}>
            Visit the Mindo website
          </Link>
        </p>
      </div>
    );
  }

  if (platform === "desktop") {
    return (
      <div className="mt-8">
        <p className="leading-7">
          Mindo is a mobile app. On an iPhone, this same link can open the
          invitation there.
        </p>
        <p className="mt-6">
          <Link href="/" className={textLinkClass}>
            Visit the Mindo website
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <p>
        <a href={invitation.href} className={primaryLinkClass}>
          Open Mindo
        </a>
      </p>
      <div className="mt-6">
        {APP_STORE_URL ? (
          <a href={APP_STORE_URL} className={textLinkClass}>
            View on the App Store
          </a>
        ) : (
          <p className="text-sm leading-6 text-muted">Mindo is coming to the App Store soon.</p>
        )}
      </div>
    </div>
  );
}

const primaryLinkClass =
  "inline-flex rounded-full bg-brand px-5 py-3 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

const textLinkClass =
  "text-sm text-ink underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

function invitationLink(
  invitationId: string,
  tokenValue: string | string[] | undefined,
): { href: string } | null {
  if (!isInvitationId(invitationId) || !isInvitationToken(tokenValue)) {
    return null;
  }

  const href = `mindo://invite/${encodeURIComponent(invitationId)}?token=${encodeURIComponent(tokenValue)}`;
  return { href };
}

function isInvitationId(value: string): boolean {
  return (
    value.length > 0 &&
    value.length <= INVITATION_ID_MAX_LENGTH &&
    INVITATION_ID_PATTERN.test(value)
  );
}

function isInvitationToken(value: string | string[] | undefined): value is string {
  return (
    typeof value === "string" &&
    value.length > 0 &&
    value.length <= INVITATION_TOKEN_MAX_LENGTH &&
    !/\s/.test(value)
  );
}

function platformFrom(userAgent: string): "ios" | "android" | "desktop" {
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "ios";
  }
  if (/Android/i.test(userAgent)) {
    return "android";
  }
  return "desktop";
}
