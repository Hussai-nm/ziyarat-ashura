import { ziyaratAshura } from "./data/ziyaratAshura";
import "./App.css";

function App() {
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  const laanCommentIndex = ziyaratAshura.findIndex(
    (l) => l.type === "comment-laan"
  );

  const salamCommentIndex = ziyaratAshura.findIndex(
    (l) => l.type === "comment-salam"
  );

  const laanStart = laanCommentIndex + 1;
  const laanEnd = salamCommentIndex - 1;

  const salamStart = salamCommentIndex + 1;
  const salamEnd =
  ziyaratAshura.findIndex((l) => l.type === "comment-2") - 1;

  const beforeRepeat = ziyaratAshura.slice(0, laanCommentIndex + 1);
  const laanBlock = ziyaratAshura.slice(laanStart, laanEnd + 1);
  const salamBlock = ziyaratAshura.slice(salamStart, salamEnd + 1);
  const afterRepeat = ziyaratAshura.slice(salamEnd + 1);

  return (
    <>
      <div className="frame-top" />
      {!isStandalone && <div className="frame-bottom" />}

      <div className="ziyarat-container">
        <div className="ziyarat-frame">
          {beforeRepeat.map((line) =>
            line.type ? (
              <div key={line.type} className="ziyarat-section">
                <div className="ziyarat-comment">{line.text}</div>
              </div>
            ) : (
              <div key={line.id} className="ziyarat-line">
                <p className="arabic">{line.arabic}</p>
                <p className="transliteration">{line.transliteration}</p>
                <p className="translation">{line.translation}</p>
              </div>
            )
          )}

          {Array.from({ length: 100 }).map((_, i) => (
            <div key={`laan-${i}`} className="ziyarat-section">
              <div className="ziyarat-comment">{i + 1} / 100</div>
              {laanBlock.map((line) => (
                <div key={`${i}-${line.id}`} className="ziyarat-line">
                  <p className="arabic">{line.arabic}</p>
                  <p className="transliteration">{line.transliteration}</p>
                  <p className="translation">{line.translation}</p>
                </div>
              ))}
            </div>
          ))}

          <div className="ziyarat-section">
            <div className="ziyarat-comment">
              You may then repeat the following salams 100 times:
            </div>
          </div>

          {Array.from({ length: 100 }).map((_, i) => (
            <div key={`salam-${i}`} className="ziyarat-section">
              <div className="ziyarat-comment">{i + 1} / 100</div>
              {salamBlock.map((line) => (
                <div key={`${i}-${line.id}`} className="ziyarat-line">
                  <p className="arabic">{line.arabic}</p>
                  <p className="transliteration">{line.transliteration}</p>
                  <p className="translation">{line.translation}</p>
                </div>
              ))}
            </div>
          ))}

          {afterRepeat.map((line) =>
            line.type ? (
              <div key={line.type} className="ziyarat-section">
                <div className="ziyarat-comment">{line.text}</div>
              </div>
            ) : (
              <div key={line.id} className="ziyarat-line">
                <p className="arabic">{line.arabic}</p>
                <p className="transliteration">{line.transliteration}</p>
                <p className="translation">{line.translation}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
