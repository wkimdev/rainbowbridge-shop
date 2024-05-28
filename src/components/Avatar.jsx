// 어바타만 따로 분리....
//* 처음부터 강박관념을 갖고 컴포넌트를 분리할 필요는 없다.

// 전달되는 인자값을 pros로 본다.
export default function Avarter({ image, isNew }) {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="avatar" />
      {isNew && <span className="new">new</span>}
    </div>
  );
}