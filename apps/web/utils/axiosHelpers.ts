import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const tempConfig = config;

    if (Object.keys(tempConfig.headers).includes("Authorization") === false) {
      const token = localStorage.getItem("accessToken");
      tempConfig.headers.Authorization = `Bearer ${token}`;
    }

    return tempConfig;
  },
  (error) => {
    console.error("✉️ ", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    console.log(error.toJSON());
    console.log(error.response);

    if (error.toJSON().message === "Network Error") {
      console.log("no internet connection");
    }

    if (error.toJSON().status === 500) {
      window.open("/500", "_self");
    }

    if (
      error.toJSON().status === 403 &&
      error.response.data.message === "unauthorized"
    ) {
      localStorage.clear();
      window.open(
        `${process.env.NEXT_PUBLIC_LANDINGG_BASE_URL}/login`,
        "_self"
      );
    }

    Promise.reject(error.response && error.response.data);
    throw error;
  }
);

export { axiosInstance };
