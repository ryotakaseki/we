import './MyButton.css'; // CSSファイルをインポート

function MyButton(props) {
  return (
    <button className="my-button">{props.text}</button>
  );
}

export default MyButton;
