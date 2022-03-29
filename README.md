# Config-Functions
A utility atomic function to get config data before sending to api

# Functions It returns


## configFunction()
Returns a normal config to call an api
```
export const configFunction = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return config;
};
```

## tokenconfigFunction()
A config cunction which requires a bearer token with it
```
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
```


## reduxConfigFunction()
A config cunction which requires a bearer token with it in redux
```
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

```
