interface Props {
  children: string;
  onClick: () => void;
}

function Button(props: Props) {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
