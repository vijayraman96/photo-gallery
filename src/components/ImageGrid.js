import React, {useEffect, useState} from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const {docs} = useFirestore("images");

  const [imgSrc, setImgSrc] = useState([]);
  const imageUpdate = async () => {
      const images = await docs;
      console.log(images);
      setImgSrc(images);
  }

  useEffect( () => {
    imageUpdate();
  },);
  console.log(imgSrc);
  return (
    <div className="img-grid">
      {imgSrc &&
        imgSrc.map((doc) => {
          return (
            <div className="img-wrap" key={doc.id}>
              <img src={doc.link} alt="uploaded" />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
