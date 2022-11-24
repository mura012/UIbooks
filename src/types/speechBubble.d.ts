export type SpeechBubble = {
  children: ReactNode;
  title: string;
  text: string;
  link?: Url;
  site?: string;
  position: "top" | "bottom";
};
