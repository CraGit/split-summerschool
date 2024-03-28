export const metadata = {
  title: "Message Sucessfully Sent - Split Summer School",
  description: "Message successfully sent. We will be in contact shortly.",
  robots: {
    index: false,
    follow: false,
  },
};
export default function page() {
  return (
    <div className="py-32 min-h-[50vh]">
      <h1 className="text-center font-semibold text-2xl font-display">
        Message Successfully Sent
      </h1>
      <p className="text-center">
        We will be in contact shortly. Thank you for reaching out.
      </p>
    </div>
  );
}
