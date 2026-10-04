import SurveyForm from "./survey-form";
export default function App() {
  return <div className="page"><header className="topbar"><a href="./" className="brand"><span className="database-mark" aria-hidden="true"><i/><i/><i/></span><span>データベース入門研修</span></a><span className="top-label">研修前のチェックイン</span></header>
  <main className="survey-layout"><aside className="intro"><span className="eyebrow">BEFORE WE BEGIN</span><h1>はじめに、<br/>あなたのことを<br className="desktop-break"/>教えてください。</h1><p className="intro-copy">一言ずつ自己紹介をお願いいたします。<br/>（差し支えない範囲で結構です）</p><div className="intro-meta"><span className="small-line"/><span>9つの質問＋経験に応じた質問・すべて任意</span></div><div className="privacy-note"><span aria-hidden="true">↗</span><p>回答は本研修の進行調整にのみ利用し、<br/>講師のみが閲覧します。</p></div></aside>
  <section className="form-panel" aria-label="事前アンケート"><div className="panel-top"><span>事前アンケート</span><span className="optional">すべて任意</span></div><SurveyForm/></section></main>
  <footer className="footer"><span>データベース入門研修</span><span>事前アンケート</span></footer></div>;
}
