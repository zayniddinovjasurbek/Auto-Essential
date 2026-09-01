import "./Contact.css";
import ContactBanner from "../contact/contact_banner/Contact_banner";
import ContactBlog from "../contact/contact_blog/Contact_blog";
import Facility from "../shop/facility/Facility";

const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <ContactBlog />
      <Facility />
    </div>
  );
};

export default Contact;