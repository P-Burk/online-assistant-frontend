"use client"

export default function ChatComponent() {
    return (
    <div>
        <div>
            <h3 className="mt-2 text-lg font-semibold">This is the sender</h3>
            <p>This is the message</p>
        </div>

        <form className="mt-12">
            <p>User Message</p>
            <textarea
                className="mt-2 w-full p-2 bg-slate-600"
                placeholder="Type your message here..."
            />
            <button className="mt-2 p-2 rounded-md bg-blue-600">Send</button>
        </form>
    </div>
  )
}