import React from "react";
import CS from "../../assets/images/cs.png";
import RAS from "../../assets/images/ras.jpg";
import IAS from "../../assets/images/ias.png";
import PES from "../../assets/images/pes.jpg";
import EMBS from "../../assets/images/embs.jpg";
import NPSS from "../../assets/images/npss.jpg";
import {
  ChaptersContainer,
  ChaptersH1,
  ChaptersWrapper,
  ChaptersCard,
  ChaptersIcon,
  ChaptersH2,
  ChaptersP
} from "./ChapterStyle";

const Chapters = () => {
  return (
    <ChaptersContainer id="chapters">
      <ChaptersH1>IEEE Chapters</ChaptersH1>
      <ChaptersWrapper>
        <ChaptersCard>
          <ChaptersIcon src={CS} />
          <ChaptersH2>CS Chapter</ChaptersH2>
          <ChaptersP>
            The INSAT IEEE Computer Society Chapter is known for its technical
            side specifically in the IT industry.
          </ChaptersP>
        </ChaptersCard>
        <ChaptersCard>
          <ChaptersIcon src={RAS} />
          <ChaptersH2>RAS Chapter</ChaptersH2>
          <ChaptersP>
            The INSAT IEEE Robotics and Automation Chapter is known for its
            technical side specifically in the Robotics and IoT industries.
          </ChaptersP>
        </ChaptersCard>
        <ChaptersCard>
          <ChaptersIcon src={IAS} />
          <ChaptersH2>IAS Chapter</ChaptersH2>
          <ChaptersP>
            The INSAT IEEE Industry Applications Society Chapter is known for
            its applications of electrical and electronic systems.
          </ChaptersP>
        </ChaptersCard>
        <ChaptersCard>
          <ChaptersIcon src={PES} />
          <ChaptersH2>PES Chapter</ChaptersH2>
          <ChaptersP>
            The INSAT IEEE Power and Energy Society Chapter focuses on the
            scientific and engineering knowledge about electric power and
            energy.
          </ChaptersP>
        </ChaptersCard>
        <ChaptersCard>
          <ChaptersIcon src={EMBS} />
          <ChaptersH2>EMBS Chapter</ChaptersH2>
          <ChaptersP>
            The INSAT IEEE Engineering in Medicine and Biology Society Chapter
            focuses on the studies of Biomedical Engineering and Biology-related
            topics.
          </ChaptersP>
        </ChaptersCard>
        <ChaptersCard>
          <ChaptersIcon src={NPSS} />
          <ChaptersH2>NPSS Chapter</ChaptersH2>
          <ChaptersP>
            The INSAT IEEE Nuclear and Plasma Sciences Society focuses n all
            phases of nuclear and plasma sciences including instrumentation,
            particle accelerators...
          </ChaptersP>
        </ChaptersCard>
      </ChaptersWrapper>
    </ChaptersContainer>
  );
};

export default Chapters;
