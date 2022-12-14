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
            src={img ? `/assets/${img}.webp` : `/assets/${id}.webp`}
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
                  <a
                    href={git}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="github 이동"
                  >
                    <CodeIcon className="btn_link" />
                  </a>
                )}
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="배포사이트로 이동"
                  >
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
