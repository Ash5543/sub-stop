
import "./Contact.css";
import {useState} from "react";


export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "831af5c8-f506-4c03-81f4-01f9f110f667");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>
          <label for="name">Name: </label>
          <input id="name-box" type="text" name="name" required/>
        </p>
        <p>
          <label for="email">Email: </label>
          <input id="email-box" type="email" name="email" required/>
        </p>
        <p>
          <label for="message">Message: </label>
        </p>
        <textarea id="message-box" name="message" required></textarea>
        <br></br>
        <button id="submit-btn" type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
}

