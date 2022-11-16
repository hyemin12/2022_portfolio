import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

function BtnBack() {
  /* 뒤로가기 */
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <div className="btn_back" onClick={goBack}>
      <ArrowBackIosIcon />
      뒤로가기
    </div>
  );
}
export default BtnBack;
