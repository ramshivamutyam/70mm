import React, { useEffect ,useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Protected({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);
  const { loader, setLoader } = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    //setLoader(true);
  }, [authentication, navigate, authStatus]);
  return loader===false ? null :<>{children}</>;
}

export default Protected;
