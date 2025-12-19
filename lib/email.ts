import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInviteEmail(email: string, token: string) {
  const inviteLink = `${process.env.APP_URL}/admin/activate?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Та admin-ээр уригдлаа.",
    html: `  <p>Сайн байна уу,</p>
      <p>Та admin-ээр уригдлаа.</p>
      <p>
        <a href="${inviteLink}">
          Энд дарж аккаунтаа идэвхжүүлнэ үү
        </a>
      </p>
      <p>Энэ link 24 цагийн дараа хүчингүй болно.</p>`,
  });
}
