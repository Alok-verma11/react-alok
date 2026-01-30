import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

function Github() {
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Alok-verma11")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 m-4 text-center">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  );
}

export default Github;
