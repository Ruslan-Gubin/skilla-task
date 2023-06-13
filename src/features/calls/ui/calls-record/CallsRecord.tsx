import { FC, useEffect, useRef, useState } from "react";
import { Close, DownloadsSvg, PlaySvg } from "../../../../shared";
import { getPrecentProgress } from "../../libs/helpers/getCoordinatPrecent";
import { getPercent } from "../../libs/helpers/getPercent";
import {
  CallsRecordProps,
  useCallsFeatures,
  useCallsFeaturesAction,
} from "../../model";

import styles from "./CallsRecord.module.scss";

const CallsRecord: FC<CallsRecordProps> = ({
  partner_id,
  record_id,
  callDuration,
}) => {
  const { getRecord } = useCallsFeaturesAction();
  const { records } = useCallsFeatures();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timeDuration, setTimeDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStartRecord = async () => {
    if (!records.hasOwnProperty(record_id)) {
      await getRecord({
        partner_id,
        record_id,
      });
    }

    setIsPlaying((prev) => !prev);
  };

  const startTimeout = () => {
    if (!audioRef.current) return;
    setTimeDuration(audioRef.current.currentTime);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    const timer = setInterval(startTimeout, 1000);

    if (isPlaying) {
      audioRef.current.play();
      timer;
    } else {
      audioRef.current.pause();
      setTimeDuration(audioRef.current.currentTime);
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPlaying]);

  const widthProgress = () => {
    if (!audioRef.current) return 0;
    return getPercent(audioRef.current.duration, timeDuration);
  };

  const handleClickProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const coordinatePrecent = getPrecentProgress(e);

    if (!audioRef.current) return;

    const totalTime = Math.floor(audioRef.current.duration);
    audioRef.current.currentTime = (totalTime / 100) * coordinatePrecent;
    setTimeDuration(audioRef.current.currentTime);
  };

  const handleCancelRecord = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.pause();
    setIsPlaying(false);
    setTimeDuration(0);
  };

  return (
    <div className={styles.root}>
      <audio
        ref={audioRef}
        src={records[record_id] ? records[record_id] : ""}
      />
      <span className={styles.time}>{callDuration}</span>
      <PlaySvg onClick={handleStartRecord} isPlay={isPlaying} />
      <div onClick={handleClickProgress} className={styles.progress}>
        <div
          className={styles.progress_completion}
          style={{ width: `${widthProgress()}%` }}
        ></div>
      </div>
      <DownloadsSvg />
      <Close onClick={handleCancelRecord} />
    </div>
  );
};

export { CallsRecord };
