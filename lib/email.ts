import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInviteEmail(
  email: string,
  token: string,
  role: string,
) {
  const inviteLink = `${process.env.APP_URL}/activate/${token}`;

  await resend.emails.send({
    from: "Young Engineers <no-reply@youngengineersmongolia.com>",
    to: email,
    subject: `Admin эрхийн урилга – Аккаунтаа идэвхжүүлнэ үү.`,
    html: `
      <p>Сайн байна уу,</p>
      <p>Танд Young Engineers Mongolia байгууллагын ${role} админ эрхийг олгохоор урьж байна.</p>
      <p>Доорх холбоосоор орж аккаунтаа идэвхжүүлснээр админ эрх тань хүчин төгөлдөр болно.</p>
      <p>Аккаунт идэвхжүүлэх холбоос: <a href="${inviteLink}">${inviteLink}</a></p>
      <h3>Анхаарна уу:</h3>
      <p>Энэхүү холбоос нь 24 цагийн дараа автоматаар хүчингүй болох тул хугацаанд нь идэвхжүүлнэ үү.</p>
      <p>Хүндэтгэсэн,</p>
      <p>Young Engineers Mongolia</p>
    `,
  });
}
