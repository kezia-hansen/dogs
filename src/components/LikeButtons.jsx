"use client";
import { useState } from "react";

function LikeButtons({ likes }) {
  const [localLikes, setLocalLikes] = useState(likes);

  function minusOne() {
    setLocalLikes(localLikes - 1);
  }
  function plusOne() {
    setLocalLikes(localLikes + 1);
  }

  return (
    <div>
      <button onClick={minusOne}>--</button>
      {localLikes}
      <button onClick={plusOne}>++</button>
    </div>
  );
}

export default LikeButtons;
