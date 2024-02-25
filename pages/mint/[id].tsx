import { useRouter } from "next/router";
import Waiting from "../../components/Mint/mint";
import axios from "axios";
import { useEffect } from "react";
import Mint from "./index";
import { observer } from "mobx-react";
var base64 = require('base-64');
const MintLink = observer(() => {
  const router = useRouter();
  const { id } = router.query;
  const getUserById = async () => {
    let de = base64.decode(id);
    localStorage.setItem("id", de);
    router.push("/mint");
  };
  useEffect(() => {
    if (id) {
      getUserById();
    }
  }, [id]);
  return <Mint />;
});
export default MintLink;
