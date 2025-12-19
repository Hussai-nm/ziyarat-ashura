// import { useEffect, useRef } from "react";
// import { ziyaratAshura } from "./data/ziyaratAshura";
// import "./App.css";

// function App() {
//   const videoRef = useRef(null);

//   const isStandalone =
//     window.matchMedia("(display-mode: standalone)").matches ||
//     window.navigator.standalone === true;

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     video.muted = true;
//     video.playsInline = true;

//     const playPromise = video.play();
//     if (playPromise !== undefined) {
//       playPromise.catch(() => {
//         // iOS fallback — user gesture not required since muted
//         video.play();
//       });
//     }
//   }, []);

//   return (
//     <>
//       <div className="frame-top" />
//       {!isStandalone && <div className="frame-bottom" />}

//       <div className="ziyarat-container">
//         <video
//           ref={videoRef}
//           className="bg-video"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           aria-hidden="true"
//           tabIndex={-1}
//           controls={false}
//           disablePictureInPicture
//         >
//           <source src="/images/vid1.mp4" type="video/mp4" />
//         </video>

//         <div className="ziyarat-frame">
//           {ziyaratAshura.map((line) => {
//             if (line.type?.startsWith("comment")) {
//               return (
//                 <div
//                   key={`${line.id}-${line.type}`}
//                   className="ziyarat-section"
//                 >
//                   <div className="ziyarat-comment">{line.text}</div>
//                 </div>
//               );
//             }

//             return (
//               <div key={line.id} className="ziyarat-line">
//                 <p className="arabic">{line.arabic}</p>
//                 <p className="transliteration">{line.transliteration}</p>
//                 <p className="translation">{line.translation}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



// import { ziyaratAshura } from "./data/ziyaratAshura";
// import "./App.css";

// function App() {
//   const isStandalone =
//     window.matchMedia("(display-mode: standalone)").matches ||
//     window.navigator.standalone === true;

//   // ---- identify indexes ----
//   const repeatCommentIndex = ziyaratAshura.findIndex(
//     (l) => l.type === "comment-1"
//   );

//   const laanSalamStart = repeatCommentIndex + 1;
//   const laanSalamEnd = 120;

//   const beforeRepeat = ziyaratAshura.slice(0, repeatCommentIndex + 1);
//   const repeatBlock = ziyaratAshura.slice(
//     laanSalamStart,
//     laanSalamEnd + 1
//   );
//   const afterRepeat = ziyaratAshura.slice(laanSalamEnd + 1);

//   return (
//     <>
//       <div className="frame-top" />
//       {!isStandalone && <div className="frame-bottom" />}

//       <div className="ziyarat-container">
//         <video
//           className="bg-video"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//         >
//           <source src="/images/vid1.mp4" type="video/mp4" />
//         </video>

//         <div className="ziyarat-frame">
//           {/* NORMAL FLOW BEFORE 100x */}
//           {beforeRepeat.map((line) => {
//             if (line.type?.startsWith("comment")) {
//               return (
//                 <div key={line.type} className="ziyarat-section">
//                   <div className="ziyarat-comment">{line.text}</div>
//                 </div>
//               );
//             }

//             return (
//               <div key={line.id} className="ziyarat-line">
//                 <p className="arabic">{line.arabic}</p>
//                 <p className="transliteration">{line.transliteration}</p>
//                 <p className="translation">{line.translation}</p>
//               </div>
//             );
//           })}

//           {/* 100x REPEAT SECTION */}
//           {Array.from({ length: 100 }).map((_, index) => (
//             <div key={`repeat-${index}`} className="ziyarat-section">
//               <div className="ziyarat-comment">
//                 {index + 1} / 100
//               </div>

//               {repeatBlock.map((line) => (
//                 <div key={`${index}-${line.id}`} className="ziyarat-line">
//                   <p className="arabic">{line.arabic}</p>
//                   <p className="transliteration">{line.transliteration}</p>
//                   <p className="translation">{line.translation}</p>
//                 </div>
//               ))}
//             </div>
//           ))}

//           {/* NORMAL FLOW AFTER 100x */}
//           {afterRepeat.map((line) => {
//             if (line.type?.startsWith("comment")) {
//               return (
//                 <div key={line.type} className="ziyarat-section">
//                   <div className="ziyarat-comment">{line.text}</div>
//                 </div>
//               );
//             }

//             return (
//               <div key={line.id} className="ziyarat-line">
//                 <p className="arabic">{line.arabic}</p>
//                 <p className="transliteration">{line.transliteration}</p>
//                 <p className="translation">{line.translation}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;





import { ziyaratAshura } from "./data/ziyaratAshura";
import "./App.css";

function App() {
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  // ---- identify indexes ----
  const repeatCommentIndex = ziyaratAshura.findIndex(
    (l) => l.type === "comment-1"
  );

  const laanSalamStart = repeatCommentIndex + 1;
  const laanSalamEnd = 120;

  const beforeRepeat = ziyaratAshura.slice(0, repeatCommentIndex + 1);
  const repeatBlock = ziyaratAshura.slice(
    laanSalamStart,
    laanSalamEnd + 1
  );
  const afterRepeat = ziyaratAshura.slice(laanSalamEnd + 1);

  return (
    <>
      <div className="frame-top" />
      {!isStandalone && <div className="frame-bottom" />}

      <div className="ziyarat-container">
        <div className="ziyarat-frame">
          {/* NORMAL FLOW BEFORE 100x */}
          {beforeRepeat.map((line) => {
            if (line.type?.startsWith("comment")) {
              return (
                <div key={line.type} className="ziyarat-section">
                  <div className="ziyarat-comment">{line.text}</div>
                </div>
              );
            }

            return (
              <div key={line.id} className="ziyarat-line">
                <p className="arabic">{line.arabic}</p>
                <p className="transliteration">{line.transliteration}</p>
                <p className="translation">{line.translation}</p>
              </div>
            );
          })}

          {/* 100x REPEAT SECTION */}
          {Array.from({ length: 100 }).map((_, index) => (
            <div key={`repeat-${index}`} className="ziyarat-section">
              <div className="ziyarat-comment">
                {index + 1} / 100
              </div>

              {repeatBlock.map((line) => (
                <div key={`${index}-${line.id}`} className="ziyarat-line">
                  <p className="arabic">{line.arabic}</p>
                  <p className="transliteration">{line.transliteration}</p>
                  <p className="translation">{line.translation}</p>
                </div>
              ))}
            </div>
          ))}

          {/* NORMAL FLOW AFTER 100x */}
          {afterRepeat.map((line) => {
            if (line.type?.startsWith("comment")) {
              return (
                <div key={line.type} className="ziyarat-section">
                  <div className="ziyarat-comment">{line.text}</div>
                </div>
              );
            }

            return (
              <div key={line.id} className="ziyarat-line">
                <p className="arabic">{line.arabic}</p>
                <p className="transliteration">{line.transliteration}</p>
                <p className="translation">{line.translation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
