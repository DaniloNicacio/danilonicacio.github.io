"use client"
import { useState } from 'react'
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"
import Link from "next/link"
import Image from "next/image"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import axios from "axios"

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [submit, setSubmit] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!executeRecaptcha) {
            return
        }

        const gRecaptchaToken = await executeRecaptcha("inquirySubmit")

        const response = await axios({
            method: "post",
            url: "/api/recaptchaSubmit",
            data: {
                gRecaptchaToken,
            },
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        });

        if (response?.data?.success === true) {
            const data = {
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
            };
            const emailResponse = await axios.post("/api/send", data)

            if (emailResponse.status === 200) {
                setEmailSubmitted(true)
            } else {
                setSubmit('Something went wrong :/')
            }
        } else {
            setSubmit('Ops! You are a robot!')
        }
    };

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best
                    to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/DaniloNicacio">
                        <Image src={GithubIcon} alt="Github Icon"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/danilo-nicacio-4ab915210/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium">
                            Your email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="input input-bordered input-error w-full"
                            placeholder="youremail@google.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block mb-2 text-sm font-medium">
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="input input-bordered input-error w-full"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block mb-2 text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            className="textarea textarea-error w-full"
                            placeholder="Let&apos;s talk about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-error w-full">
                        Send Message
                    </button>
                </form>
                {submit && <p className="text-lg text-center">{submit}</p>}
                {emailSubmitted && (
                    <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
                )}
            </div>
        </section>
    )
}

export default EmailSection;
