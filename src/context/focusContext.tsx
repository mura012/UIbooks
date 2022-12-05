import { useState, Context, createContext, ReactNode, useContext } from "react";

export const FocusContext: Context<any> = createContext(false);
export const SetContext: Context<any> = createContext(false);
type Props = {
  children: ReactNode;
};
export const FocusProvider = ({ children }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <FocusContext.Provider value={focus}>
      <SetContext.Provider value={setFocus}>{children}</SetContext.Provider>
    </FocusContext.Provider>
  );
};

export const useFocus = () => useContext(FocusContext);
export const useSetFocus = () => useContext(SetContext);
