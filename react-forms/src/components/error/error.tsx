interface IPropsError {
  title: string;
}

const Error = (props: IPropsError) => {
  const { title } = props;
  return <div className="error">{title}</div>;
};

export default Error;
