//@ts-check

export const configFunction = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return config;
};

/**
 * @param {{token: string}} userInfo
 * @returns a config function which requires a bearer token with it
 */
export const tokenconfigFunction = (userInfo) => {
  if (userInfo.token == undefined) {
    return undefined;
  }
  const { token } = userInfo;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
};


/**
 * @param {Object} getState
 * @returns a config function which requires a bearer token with it in redux
 */
export const reduxConfigFunction = (getState) => {
  const {
    userLogin: { data },
  } = getState();
  const config = {
    "Content-Type": "application/json",
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  return config;
};
