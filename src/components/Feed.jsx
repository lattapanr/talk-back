import { useState } from "react";
import "../index.css";
import { communicationStyles } from "../data/communicationStyles";
import CopyIcon from "../assets/icons/copy.svg";
import TickIcon from "../assets/icons/tick.svg";

const Feed = () => {
  const [message, setMessage] = useState("");
  const [communicationStyle, setCommunicationStyle] = useState("");
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [submittedStyle, setSubmittedStyle] = useState("");
  const [copied, setCopied] = useState("");

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const APIBODY = {
    model: "text-davinci-003",
    prompt: `Translate the following message into a ${communicationStyle} communication style:

    "${message}"
    
    Please provide 10 examples that creatively express the given message in the specified communication style.`,
    max_tokens: 1000,
    temperature: 0.6,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.1,
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log(`${message} ${communicationStyle}`);
    if (!message || !communicationStyle) {
      return;
    }

    setIsLoading(true);

    await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(APIBODY),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const responseText = data.choices[0].text.trim();
        const responseArray = responseText.split("\n");
        setResponses(responseArray);
      })
      .catch((error) => {
        console.error(error);
        setResponses([]);
      });
    setIsLoading(false);
    setSubmittedMessage(message);
    setSubmittedStyle(communicationStyle);
    setMessage("");
    setCommunicationStyle("");
    setIsSubmitted(true);
  }

  const handleStyleChange = (e) => {
    setCommunicationStyle(e.target.value);
    setIsSubmitted(false);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    setIsSubmitted(false);
  };

  return (
    <section className="w-full flex flex-col items-center gap-10 mb-10">
      <form className="w-full flex flex-col gap-10 max-w-lg ">
        <div>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <label
            htmlFor="simple-search"
            className="text-charcoal dark:text-off-white"
          >
            What do you wanna say?
          </label>

          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-park-green dark:border-desert-gold text-charcoal text-sm rounded-lg focus:ring-park-green focus:border-park-green block w-full p-2.5"
              placeholder="Ex. I need to eat right now!"
              required
              value={message}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="communication"
            className="block text-charcoal dark:text-off-white"
          >
            How should we go with this?
          </label>
          <select
            id="communication"
            className="border-b border-park-green dark:border-desert-gold text-gray-900 text-sm focus:ring-park-green block w-full p-2.5"
            value={communicationStyle}
            onChange={handleStyleChange}
          >
            <option defaultValue>Choose communication style</option>
            {communicationStyles.map((style) => (
              <option key={style.value} value={style.value}>
                {style.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="p-2.5 text-sm font-bold text-white bg-park-green dark:bg-desert-gold rounded-lg hover:scale-105 hover:ease-in hover:duration-200"
          onClick={handleFormSubmit}
        >
          Generate Examples
          <span className="sr-only">Submit</span>
        </button>
      </form>

      <section className="max-w-2xl">
        {isSubmitted ? (
          <h2 className="mb-10 text-charcoal dark:text-off-white">{`TalkBack's Friendly Suggestions for how to say "${submittedMessage}" in a ${submittedStyle} way.`}</h2>
        ) : (
          <></>
        )}
        <div>
          {isLoading ? (
            <div className="text-charcoal dark:text-off-white">
              Waiting for response...
            </div>
          ) : (
            responses.map((response, index) => {
              const responseText = response.split(". ")[1];
              return (
                <div
                  key={index}
                  className="flex justify-between border-b border-charcoal mb-4 text-charcoal dark:text-off-white dark:border-off-white"
                >
                  {response}
                  <button
                    className="h-5 max-w-[20px] dark:bg-off-white dark:rounded-md"
                    onClick={() => {
                      navigator.clipboard.writeText(responseText);
                      setCopied(responseText);
                      setTimeout(() => {
                        setCopied("");
                      }, 1000);
                    }}
                  >
                    <img
                      src={copied === responseText ? TickIcon : CopyIcon}
                      alt={copied === responseText ? "Tick Icon" : "Copy Icon"}
                      className="w-full cursor-pointer"
                    />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </section>
    </section>
  );
};

export default Feed;
