function Experience() {
  return (
    <div className="inner">
      <h1 className="section-title" id="expRef">
        교육 및 기타이력
      </h1>
      <div className="experience-wrapper">
        <div className="item education">
          <div className="line"></div>
          <ul>
            <li>
              <p className="date">2021.04 ~ 2021.10</p>
              <h4>패스트 캠퍼스</h4>
              <p>한번에 끝내는 프론트엔드 개발 초격차 패키지 수료</p>
            </li>
            <li>
              <p className="date">2020.04 ~ 2020.09</p>
              <h4>하이미디어 컴퓨터학원</h4>
              <p>스마트기기 UI/UX 웹디자인 & 웹 퍼블리셔 과정 수료</p>
            </li>
            <li>
              <p className="date">2013.03 ~ 2017.05</p>
              <h4>인천 가톨릭대학교</h4>
              <p>환경디자인학과 학사 (4년제)</p>
            </li>
          </ul>
        </div>
        <div className="item experience">
          <div className="line"></div>
          <ul>
            <li>
              <p className="date">2019.05 ~ 2020.01</p>
              <h4>두에이리원</h4>
              <p>
                공연사업팀, 퇴사 사유 : 경영악화로 인한 임금체불
                <br />
                같이 일했던 팀장의 업무를 도와주다가 입사하게 됨
              </p>
            </li>
            <li>
              <p className="date">2018.05 ~ 2018.12</p>
              <h4>스타이엔티</h4>
              <p>공연사업 및 신규사업팀, 퇴사 사유 : 업직종 전환</p>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="section-title">자격증</h1>
      <div className="certificate">
        <ul>
          <li>
            <p>2021.12</p>
            <h4>정보처리기능사</h4>
          </li>
          <li>
            <p>2021.12</p>
            <h4>컴퓨터그래픽스기능사</h4>
          </li>
          <li>
            <p>2020.09</p>
            <h4>웹디자인기능사</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
