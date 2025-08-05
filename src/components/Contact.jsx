function Contact() {
  return (
    <>
      <h1 className="text-center pt-4 text-3xl font-bold">Contact Us</h1>
      <div className="flex justify-center h-screen">
        <div className="p-6 bg-gray-200 rounded shadow-md w-full max-w-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message here..."
                rows="4"
                className="w-full mt-1 p-2 border rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
