import { useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import Tab from "../components/Detail/Tab";
import DetailHeader from "../components/Detail/DetailHeader";
import DetailContent from "../components/Detail/DetailContent";
import BtnBack from "../components/BtnBack";

import { data } from "../data";
import { ProjectProps } from "../type";

function DetailPage() {
  const [tabIdx, setTabIdx] = useState<number>(0);
  const { itemId } = useParams<string>();
  const state: ProjectProps[] = data.projects;
  const item: ProjectProps = state.filter((a) => a.id === itemId)[0];

  return (
    <Layout>
      <section className="inner work-detail-wrapper">
        <BtnBack />
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
