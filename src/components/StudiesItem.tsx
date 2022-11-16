import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";

import { StudyProps } from "../type";

const StudiesItem = (item: StudyProps) => {
  const { id, img, filter, title, url, git } = item;

  return (
    <>
      <li key={id} className="studies-item">
        <div className="img-wrapper">
          <img
            src={img ? `/assets/${img}.png` : `/assets/${id}.png`}
            alt={title}
          />
        </div>
        <div className="item-wrapper">
          <div className="item-text-wrapper">
            <p className="item-filter">{filter}</p>
            <div className="row">
              <h3 className="item-title">{title}</h3>
              <div className="btn-wrapper">
                {git && (
                  <a href={git} target="_blank" rel="noreferrer">
                    <CodeIcon className="btn_link" />
                  </a>
                )}
                {url && (
                  <a href={url} target="_blank" rel="noreferrer">
                    <LanguageIcon className="btn_link" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default React.memo(StudiesItem);
