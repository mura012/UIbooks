type Props = {
  title: string;
  body: string;
};

export const ModalChildren = ({ title, body }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
