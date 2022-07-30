import React from "react";
import LandHeader from "../LandingPage/LandHeader";
import "./css/index.css";
// import Editor from "react-medium-editor";
import Editor from "react-medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/beagle.css";
import { useSelector } from "react-redux";
import { selectUserId } from "../../features/userIdSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Index = ({userDetails}) => {
  const [title, setTitle] = React.useState("");

  const [desc, setDesc] = React.useState("");

  const navigate = useNavigate();

  // console.log(title);
  // console.log(desc);

  const handleSubmitStories = async () => {
    const body = {
      title: title,
      content: desc,
      userId: userDetails?._id,
    };

    const confHeader = {
      "Content-Type": "application/json",
    };
    await axios
      .post("/api/stories", body, confHeader)
      .then((res) => {
        if (res.data.status) {
          console.log(res.data.message);
          navigate(`/story/${res.data.data}`);
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <LandHeader />
      <div className="pub-button">
        <button onClick={handleSubmitStories}>Publish</button>
      </div>
      <div
        style={{
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        <h2>Title of the Story</h2>
      </div>

      {/* <ContentEditable
        html={title} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={(e) => setTitle(e.target.value)} // handle innerHTML change
      /> */}
      <Editor
        tag="pre"
        text={title}
        onChange={(text, medium) => {
          setTitle(text);
          // console.log(medium);
        }}
        options={{
          toolbar: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "anchor",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "quote",
              // "unorderedlist",
              // "orderedlist",
              // "subscript",
              // "superscript",
              "outdent",
              "indent",
              "code",
              "image",
            ],
          },
          placeholder: {
            text: "Write  your story.",
          },

          autoLink: true,
          anchor: {
            placeholderText: "Enter reference link",
            // customClassOption: "btn",
            // customClassOptionText: "Refernce link",
          },
          paste: {
            cleanPastedHTML: true,
            cleanAttrs: ["style", "dir"],
            cleanTags: ["label", "meta"],
          },
          anchorPreview: {
            hideDelay: 300,
          },
        }}
      />
      <div
        style={{
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        <h2>Description of story</h2>
      </div>
      <Editor
        tag="div"
        text={desc}
        onChange={(text) => setDesc(text)}
        options={{
          // extensions: {
          //   embedButton: new EmbedButtonExtension(),
          // },
          toolbar: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "anchor",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "quote",
              "justified",
              "unorderedlist",
              "orderedlist",
              "subscript",
              "superscript",
              "outdent",
              "indent",
              "code",
              "horizontal",
            ],
          },
          placeholder: {
            text: "Write  your story.",
          },

          autoLink: true,
          anchor: {
            placeholderText: "Enter reference link",
            // customClassOption: "btn",
            // customClassOptionText: "Refernce link",
          },
          paste: {
            cleanPastedHTML: true,
            cleanAttrs: ["style", "dir"],
            cleanTags: ["label", "meta"],
          },
          anchorPreview: {
            hideDelay: 300,
          },
        }}
      />
      {/* <ContentEditable
        html={desc} // innerHTML of the editable div
        style={{
          minHeight: "50vh",
        }}
        className="medium_description"
        disabled={false} // use true to disable edition
        onChange={(e) => setDesc(e.target.value)} // handle innerHTML change
      /> */}
    </>
  );
};

export default Index;
