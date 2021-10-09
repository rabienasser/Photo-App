import React, { useState } from "react";
import close from "assets/close.png";
import { toast } from "react-toastify";
import { openModal } from "../../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
   Overlay,
   Modal,
   TopHalf,
   BottomHalf,
   User,
   Guidelines,
   TextArea,
} from "./MessageModal.style";

const MessageModal = ({
   profileImage,
   name,
   purpose,
   placeholder,
   closeModal,
}) => {
   const [textValue, setTextValue] = useState("");

   const notify = () =>
      toast("Your message has been sent!", {
         className: "toast",
         progressClassName: "toast-progress",
      });

   return (
      <Overlay>
         <Modal variants={openModal} initial="hidden" animate="visible">
            <TopHalf>
               <User>
                  <div>
                     <img src={profileImage.large} alt={name} />
                     <h2>Message {name}</h2>
                  </div>
                  <img
                     onClick={() => closeModal()}
                     src={close}
                     alt="close modal"
                     className="closeBtn"
                  />
               </User>
               <p>
                  Send a message to{" "}
                  <span>
                     <b>{name}</b>
                  </span>{" "}
                  and receive a reply through your email.
               </p>
               <Guidelines>
                  <li>
                     <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                     Follow <span>message guidelines</span>
                  </li>
                  <li>
                     <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                     No spam
                  </li>
                  <li>
                     <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                     For legal questions, see <span>the license</span>
                  </li>
               </Guidelines>
               <div>
                  <p>What are you writing about</p>
                  <div className="purpose">
                     <p>{purpose}</p>
                  </div>
               </div>
            </TopHalf>
            <BottomHalf disabled={textValue.length < 20}>
               <TextArea>
                  <p>Your message</p>
                  <textarea
                     name="sendMessage"
                     id="textarea"
                     placeholder={placeholder}
                     onChange={(e) => {
                        setTextValue(e.target.value);
                     }}
                  ></textarea>
               </TextArea>
               <button
                  onClick={() => {
                     if (textValue.length > 20) {
                        closeModal();
                        notify();
                     }
                  }}
               >
                  Send Message
               </button>
            </BottomHalf>
         </Modal>
      </Overlay>
   );
};

export default MessageModal;
