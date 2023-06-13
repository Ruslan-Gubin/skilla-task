import { ReqRecordPartner } from "../model";

export const getRecordPartner = (body: ReqRecordPartner) => {
  return fetch(
    `https://api.skilla.ru/mango/getRecord?record=${body.record_id}&partnership_id=${body.partner_id}`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer testtoken",
        "Content-type":
          "audio/mpeg, application/json, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
        "Content-Transfer-Encoding": "binary",
        "Content-Disposition": 'filename="record.mp3"',
      },
    }
  );
};
