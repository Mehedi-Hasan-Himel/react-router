import React from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
   const params = useParams()
  return (
    <div>
        <h2>This is details about bondhu : {params.friendId}</h2>
    </div>
  );
};

export default FriendDetail;
