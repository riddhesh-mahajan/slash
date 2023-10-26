import messages from "messages";
import statuscodes from "statuscodes";

export const createResponse = (resData: {
  message?: string;
  payload?: any;
  status?: number;
}) => {
  return Response.json(
    {
      message: resData.message || messages.SUCCESS,
      payload: resData.payload || {},
    },
    { status: resData.status || statuscodes.OK }
  );
};
