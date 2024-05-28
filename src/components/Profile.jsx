//rfc

import Avarter from "./Avatar";

// 전달되는 인자값을 pros로 본다.
export default function Profile({image, name, title, isNew }) {
  return (
    <div className="profile">
      <Avarter image={image} isNew={isNew}/>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
