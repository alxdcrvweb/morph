import Link from "next/link";
import { ipfsGateway } from "../../utils/utilities";
import style from "../../styles/gallery.module.scss";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { observer } from "mobx-react";
const OneImage = observer(({ el, }: any) => {
  const [load, setLoad] = useState(false);
  return (
    <Link href={`/gallery/${el.id}`} key={el.id}>
      <div className={style.gallery__item}>
        <img
          src={"/api/image?cid=" + el.image}
          style={{ opacity: load ? 1 : 0 }}
          alt={el.name}
          onLoad={(e) => {
            setLoad(true);
          }}
        />
        <div className={style.gallery__loader}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="35"
            visible={!load ? true : false}
          />
        </div>
        <p>#{el.id}</p>
      </div>
    </Link>
  );
})
export default OneImage;
