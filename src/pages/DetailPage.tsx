import { useParams, useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import DetailHeader from "../components/Detail/DetailHeader";
import DetailContent from "../components/Detail/DetailContent";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { data } from "../data";
import { ProjectProps } from "../type";
import Tab from "../components/Detail/Tab";
import { useState } from "react";

function DetailPage() {
  const [tabIdx, setTabIdx] = useState<number>(0);
  const { itemId } = useParams<string>();
  const state: ProjectProps[] = data.projects;
  const item: ProjectProps = state.filter((a) => a.id === itemId)[0];

  /* 뒤로가기 */
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <Layout>
      <section className="inner work-detail-wrapper">
        <div className="btn_back" onClick={goBack}>
          <ArrowBackIosIcon />
          뒤로가기
        </div>
        <div className="work-detail-main">
          <DetailHeader item={item} />
          <div className="tab-wrapper">
            <Tab tabs={item.tabs} idx={tabIdx} setTabIdx={setTabIdx} />
            <DetailContent
              tabContent={item.tabContent[tabIdx]}
              idx={tabIdx}
              id={itemId}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DetailPage;
