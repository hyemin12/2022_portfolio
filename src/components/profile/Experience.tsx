import BoltIcon from "@mui/icons-material/Bolt";
import styles from "./Profile.module.css";

const Experience = () => {
  const years = [2021, 2020, 2019, 2018, 2017];
  const data = [
    {
      year: 2021,
      title: "[교육이수] 패스트캠퍼스",
      sub: "한번에 끝내는 프론트엔드 개발 초격차 패키지",
    },
    { year: 2021, title: "[자격증] 컴퓨터그래픽스운용기능사" },
    {
      year: 2020,
      title: "[자격증] 웹디자인기능사",
    },
    {
      year: 2020,
      title: "[교육이수] 하이미디어 컴퓨터학원",
      sub: "스마트기기 Ux/UI 웹디자인&웹퍼블리셔 과정 수료",
    },
    { year: 2019, title: "[사회활동] 두에이리원 - 공연사업팀" },
    { year: 2018, title: "[사회활동] 스타이엔티 - 공연사업 및 신규사업팀" },
    {
      year: 2017,
      title: "[사회활동] 에이엔스테이지 - 세트미술팀",
    },
    {
      year: 2017,
      title: "[교육이수] 인천가톨릭대학교 졸업",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>
        <BoltIcon className={styles.title_icon} />
        Experience
      </h4>
      <div className={styles.exp_wrapper}>
        <ul className={styles.exp_items}>
          <>
            {years.map((y) => {
              return (
                <li className={styles.exp_item} key={y}>
                  <p className={styles.year}>{y}</p>
                  <div>
                    {data
                      .filter((i) => i.year === y)
                      .map((a) => {
                        return (
                          <div className={styles.exp_detail} key={a.title}>
                            <p className={styles.highlight}>{a.title}</p>
                            {a.sub && (
                              <p className={styles.text_small}>{a.sub}</p>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </li>
              );
            })}
          </>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
