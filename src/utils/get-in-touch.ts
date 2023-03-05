import {
  MESSAGE_GET_IN_TOUCH,
  PHONE_NUMBER,
  WA_ME_URL,
} from "@/constants/Messages";

export const getInTouch = () => {
  const url = `${WA_ME_URL}${PHONE_NUMBER}?text=${urlencodedtext(
    MESSAGE_GET_IN_TOUCH
  )}`;
  open(url, "_blank");
};

const urlencodedtext = (text: string) => {
  return encodeURI(text);
};
