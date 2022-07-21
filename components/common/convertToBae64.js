import React from 'react';

const covertTobase64 = (buffer) => {
    console.log(buffer);
    const base64String = new Buffer.from(buffer).toString("base64");
    // console.log(base64String)
    return base64String;
  };
  export default covertTobase64;
