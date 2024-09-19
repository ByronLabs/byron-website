"use server";

export async function sendContactEmailAction(prevState: unknown, formData: FormData): Promise<boolean> {
    const contactInfo = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
        platform: "Byron Labs",
    };

    const response = await fetch("https://app-stage.vysion.ai/api/email/send-contact-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: process.env.NEXT_API_KEY,
        },
        body: JSON.stringify(contactInfo),
    });

    const result = await response.json();
    if (!result.ok) {
        console.error("Error submiting contact form: ", result.errorMessage);
        return false;
    }
    return true;
}
