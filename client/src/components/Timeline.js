import React from 'react'
import '../styles/timeline.css'

export default function Timeline() {
  return (
    <>
      <div className="timeline">
        <div className="timeline-container left">
          <div className="timeline-content">
            <h2>1880</h2>
            <p>Maapallon lämpötila on kohonnut vuodesta 1880 lähtien n. 0.08° C per vuosikymmen.</p>
          </div>
        </div>
        <div className="timeline-container right">
          <div className="timeline-content">
            <h2>1981</h2>
            <p>Lämpeneminen on kuitenkin tuplaantunut vuodesta 1981. Nykyinen lämpenimen on noin 0.18° C per vuosikymmen.</p>
          </div>
        </div>
        <div className="timeline-container left">
          <div className="timeline-content">
            <h2>1988</h2>
            <p>James Hansen esitti <a href='https://www.sealevel.info/1988_Hansen_Senate_Testimony.html'>lausunnon</a> Yhdysvaltain senaatissa että kasvihuoneilmiö oli havaittu ja ilmastonmuutos on käynnissä.</p>
          </div>
        </div>
        <div className="timeline-container right">
          <div className="timeline-content">
            <h2>2013</h2>
            <p>Ilmakehän CO2 pitoisuus ylitti 400 ppm rajan ensimmäistä kertaa yli kolmeen miljoonaan vuoteen.</p>
          </div>
        </div>
        <div className="timeline-container left">
          <div className="timeline-content">
            <h2>2018</h2>
            <p>Vuodesta 1950 vuoteen 2018, luontoon ja kaatopaikoille on kertynyt yli viisi miljardia tonnia muovijätettä.</p>
          </div>
        </div>
        <div className="timeline-container right">
          <div className="timeline-content">
            <h2>2021</h2>
            <p>
              <a href='https://www.ncei.noaa.gov/news/global-climate-202112' target={"_blank"}>NOAAn </a>
              raportin mukaan vuosi 2021 oli kuudenneksi lämpimin koko mittaushistorian aikana.
              </p>
          </div>
        </div>
      </div>
    </>
  )
}
