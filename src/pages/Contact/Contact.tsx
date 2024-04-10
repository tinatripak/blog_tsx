import React from "react";
import Title from "../../components/Title/Title";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact: React.FC = () => {
  return (
    <div>
      <Title text="Contact" />
      <ContactForm />
    </div>
  );
};

export default Contact;
