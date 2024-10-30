import ContactCard from "../../../components/home/contact-card"
import useDynamicTitle from "../../../hooks/dynamic-title.hook"

export default function ContactPage() {
    useDynamicTitle()
    return (
        <div className="container flex flex-col gap-5 my-10">
            {/* Contact Us Section */}
            <ContactCard/>
        </div>
    )
}