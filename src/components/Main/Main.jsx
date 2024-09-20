import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setInput(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed! The content is:', inputValue);
      onSent();
      setInputValue(""); // Clear the input field
      setInput(""); // Clear the context input value
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>TechBOT</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello ,</span>
              </p>
              <p>How can I help You?</p>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              value={inputValue}
              type="text"
              placeholder="Enter a prompt here"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <div>
              <img src={assets.mic_icon} alt="" />
              {input ? <img onClick={() => { onSent(); setInputValue(""); setInput(""); }} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            TechBot may display inaccurate info, including about people, so
            double-check its responses.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
