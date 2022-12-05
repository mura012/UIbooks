import { useState, Context, createContext, ReactNode } from "react";

export const FocusContext: Context<any> = createContext(false);
export const SetContext: Context<any> = createContext(false);
type Props = {
  children: ReactNode;
};
export const FocusProvider = ({ children }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <SetContext.Provider value={[, setFocus]}>
      <FocusContext.Provider value={[focus]}>{children}</FocusContext.Provider>
    </SetContext.Provider>
  );
};
